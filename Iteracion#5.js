/*Use um loop for para percorrer todos os destinos no array e remover elementos com id 11 e 40.
Imprime em um log do console a matriz. Você pode usar esta matriz:*/

const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
]

for(let travel of placesToTravel){
    console.log(travel.id);
    if(travel.id === 11){
        placesToTravel.splice(placesToTravel.indexOf(travel), 1);
    } 
    if(travel.id === 40){
        placesToTravel.splice(placesToTravel.indexOf(travel), 1);
    }
}
console.log(placesToTravel);