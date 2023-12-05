export default function Button({primary,href,children}){
    return <button>
        <a href={href} className={(primary? 'bg-black text-white hover:bg-neutral-900 ':'border border-black hover:bg-neutral-200 ') + ' px-6 py-3 hover:underline mono'}>{children}</a>
    </button>
}