const { useState } = React

export function LongTxt({ text, length }) {
    console.log(text, length)
    const [isLongTxtShown, setLongTxtShown] = useState(false)

    function getTxtToShow(isLongTxtShown, text, length) {
        return (text.length < length || isLongTxtShown) ? text : text.substring(0, length + 1) + '...'
    }

    function onToggleLongTxt() {
        setLongTxtShown((prevLongTxtShown) => !prevLongTxtShown)
    }

    return <div>
        <p>{getTxtToShow(isLongTxtShown, text, length)}</p>
        {text.length > length && <button onClick={onToggleLongTxt}>{isLongTxtShown ? 'Read Less' : 'Read More'}</button>}
    </div>
}