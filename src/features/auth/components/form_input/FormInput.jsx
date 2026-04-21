const FormInput = ({ 
    placeHolder = "", 
    type = "text",
    value = null,
    handleValue = () => {}
}) => {
    return (
        <input
            type={type}
            placeholder={placeHolder}
            className="w-full p-16 rounded-sm bdr-0 bg-background text-normal"
            value={value}
            onChange={handleValue}
            required
          />
    )
}

export default FormInput