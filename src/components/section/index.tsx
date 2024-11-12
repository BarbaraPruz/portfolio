
export const Section = ({extraClasses, children}) => (
    <div className={`h-screen py-10 flex flex-col justify-center items-center ${extraClasses}`}>
        {children}
    </div>
)