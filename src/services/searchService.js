export function productsMetadata(products) {
    return products.map(p => ({
        id: p.id,
        meta: [
            p.title,
            p.category,
            p.brand

        ].filter(Boolean)
    }));
}


export function searchItem(query, products) {
    const normalizedQuery = query.toLowerCase();

    const metadata = productsMetadata(products);

    return metadata
        .map((item, index) => {
            const hayCoincidencia = item.meta.some(field =>
                field.toLowerCase().includes(normalizedQuery)
            );
            return hayCoincidencia ? products[index] : null;
        })
        .filter(Boolean);
}