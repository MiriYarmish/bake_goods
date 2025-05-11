

export const validPrice = (price) => {
    if (price <= 0 || price===null)
        return 'the price is to low'
    else
        return ''
}

export const validCode = (code,allpro) => {
    let x =false
    allpro.forEach(element => {
        if (element.code == code)
            x=true
    });
    if(x)
        return 'the code is in use'
    return ''
}

export const validName = (name) => {
    if (name == '' || name===null)
        return 'there is no name'
    else
        return ''
}

export const validdis = (discription) => {
    if (discription == '' || discription===null)
        return 'there is no discription'
    else
        return ''
}