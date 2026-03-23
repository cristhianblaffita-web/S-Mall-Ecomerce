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
            const anyCoincidence = item.meta.some(field =>
                field.toLowerCase().includes(normalizedQuery)
            );
            return anyCoincidence ? products[index] : null;
        })
        .filter(Boolean);
}