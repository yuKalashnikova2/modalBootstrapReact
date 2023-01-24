const Button = ({ size = '', ...props }) => {
  const classSize = size && `btn-${size}`

  return (
    <button type="button" className={`btn btn-primary ${classSize}`.trim()} {...props}>
      {props.children}
    </button>
  )
}

export default Button
