class HotelResultService
{
    static readHotels(){
        return [{
         "idH": {
           "$idHH": "AKA34"
         },
         "name": "Kelvin Palace",
         "descrip": "Solo la habitación",
         "stars": "4",
         "price": 11000,
         "images": [
           "https://images.almundo.com/201/1000000/10000/4200/4164/675037ae_b.jpg",
           "https://images.almundo.com/201/1000000/10000/6300/6260/6b25e36d_b.jpg",
           "https://images.almundo.com/201/1000000/10000/8100/8092/8092_106_b.jpg"
         ],
         "amenities": {
             "wifi": "wifi",
             "pay": "payform",
             "par": "Parking",
             "bar" :"bares"
         }
       },
       {
         "idH": {
           "$idHH": "KLK09"
         },
         "name": "Pensilvania Resort & Casino",
         "descrip": "Solo la habitación",
         "stars": "4",
         "price": 8600,
         "images": [
           "https://images.almundo.com/201/1000000/10000/6300/6260/6b25e36d_b.jpg",
           "https://images.almundo.com/201/1000000/10000/4200/4164/675037ae_b.jpg",
           "https://images.almundo.com/201/1000000/10000/8100/8092/8092_106_b.jpg"
         ],
         "amenities": {
           "wifi": "wifi",
           "tel": "telefono",
           "bar": "bares"
         }
       },
       {
         "idH": {
           "$idHH": "UJH31"
         },
         "name": "House of Love",
         "descrip": "Solo la habitación",
         "stars": "2",
         "price": 4700,
         "images": [
           "https://images.almundo.com/201/1000000/10000/8100/8092/8092_106_b.jpg",
           "https://images.almundo.com/201/1000000/10000/6300/6260/6b25e36d_b.jpg",
           "https://images.almundo.com/201/1000000/10000/4200/4164/675037ae_b.jpg"
         ],
         "amenities": {
           "wifi": "wifi",
           "tel": "telefono"
         }
       },
       {
         "idH": {
           "$idHH": "TYW32"
         },
         "name": "Disney Magic Island",
         "descrip": "Solo la habitación",
         "stars": "5",
         "price": 19000,
         "images": [
           "https://images.almundo.com/201/1000000/10000/9300/9279/9279_69_b.jpg",
           "https://placehold.it/350x230",
           "https://placehold.it/350x230"
         ],
         "amenities": {
             "wifi": "wifi",
             "pay": "payform",
             "par": "Parking",
             "tel": "telefono",
             "sp": "Spa"
         }
       },
       {
         "idH": {
           "$idHH": "MNB23"
         },
         "name": "Trebol Resort",
         "descrip": "Solo la habitación",
         "stars": "2",
         "price": 6100,
         "images": [
           "https://images.almundo.com/201/2000000/1350000/1343800/1343731/1343731_71_b.jpg",
           "https://placehold.it/350x230",
           "https://placehold.it/350x230"
         ],
         "amenities": {
           "tel": "telefono",
           "pay": "payform"
         }
       },
       {
         "idH": {
           "$idHH": "ASD23"
         },
         "name": "Magnity Mountain",
         "descrip": "Solo la habitación",
         "stars": "3",
         "price": 3699,
         "images": [
           "https://images.almundo.com/201/2000000/1350000/1343800/1343731/1343731_71_b.jpg",
           "https://placehold.it/350x230",
           "https://placehold.it/350x230"
         ],
         "amenities": {
           "wifi": "wifi",
           "tel": "telefono",
           "sp": "Spa"
         }
       },
       {
         "idH": {
           "$idHH": "POK31"
         },
         "name": "Empire New Jersey",
         "descrip": "Solo la habitación",
         "stars": "4",
         "price": 5050,
         "images": [
           "https://images.almundo.com/201/1000000/30000/25000/24954/24954_678_b.jpg",
           "https://placehold.it/350x230",
           "https://placehold.it/350x230"
         ],
         "amenities": {
             "wifi": "wifi",
             "tel": "telefono",
             "pay": "payform",
             "par": "Parking"
         }
       }
     ];
    }
}

module.exports = HotelResultService;
