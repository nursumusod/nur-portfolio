import dynamic from 'next/dynamic'

const noSsr = props => <>{props.children}</>

export default dynamic(() => Promise.resolve(noSsr), {
    ssr: false
})
    