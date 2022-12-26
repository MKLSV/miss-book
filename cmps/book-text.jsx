const { useState } = React

export function LongTxt({ text }) {

    const [destraction, more] = useState(text)

    function onMore() {
        more(text.repeat(30))
    }

    return <div className="text">
        <a>{destraction} </a>
        <a className="more"href="#" onClick={onMore}>show more...</a>
    </div>
}