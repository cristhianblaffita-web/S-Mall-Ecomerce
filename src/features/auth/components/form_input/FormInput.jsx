const FormInput = ({ 
    placeHolder = "", 
    type = "text",
    name = "",
    ...props
}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeHolder}
            className="w-full p-16 rounded-sm bdr-0 bg-background text-normal"
            {...props}
          />
    )
}

export default FormInput