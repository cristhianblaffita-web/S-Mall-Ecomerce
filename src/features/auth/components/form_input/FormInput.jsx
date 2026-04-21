const FormInput = ({ 
    placeHolder = "", 
    type = "text",
    value = "",
    name = "",
    onChange = () => {}
}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeHolder}
            className="w-full p-16 rounded-sm bdr-0 bg-background text-normal"
            value={value}
            onChange={onChange}
            required
          />
    )
}

export default FormInput