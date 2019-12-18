

const fetchComponentsNames = [

]

const fetch = () => {

    fetchComponentsNames.map(element =>

        customElements.define(

            element.name
                .split(/(?=[A-Z])/)
                .map(word => word.toLowerCase())
                .map((word, index, arr) => index !== arr.length - 1 ? `${word}-` : word)
                .reduce((p, c) => p + c, '')

            , element)
    )

}

fetch()