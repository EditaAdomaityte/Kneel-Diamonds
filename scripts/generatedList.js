export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=type")
    const orders = await fetchResponse.json()
    // let ordersHTML=""
    // for (const order of orders) {
    //     const orderPrice = order.metal.price + order.style.price + order.size.price
    //     ordersHTML +=`<div>
    //         Order #${order.id} cost ${orderPrice}</div>`
    // }
    


    let ordersHTML = orders.map(
       (order) => {
        const orderPrice = order.metal.price + order.style.price + order.size.price
        if (order.type.id === 1) return `<div> Order #${order.id} cost ${orderPrice}</div>`;
        if (order.type.id === 2) return `<div> Order #${order.id} cost ${orderPrice*2}</div>`;
        return `<div> Order #${order.id} cost ${orderPrice*4}</div>`;
        }
    ).join('');

    return ordersHTML
}