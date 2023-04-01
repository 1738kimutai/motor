
#Create 10 random Users 

user1=User.create(username: "kante", email: "kante@kante", password_digest: "1234", age: 35,role:"user")
user2=User.create(username: "manu", email: "manu@manu", password_digest: "1334", age: 32,role:"user")
user3=User.create(username: "leah", email: "leah@leah", password_digest: "1114", age: 28,role:"user")
user4=User.create(username: "kani", email: "kani@kani", password_digest: "1777", age: 26,role:"user")
user5=User.create(username: "james", email: "james@james", password_digest: "1834", age: 33,role:"admin")
user6=User.create(username: "lito", email: "klito@lito", password_digest: "1934", age: 27,role:"user")
user7=User.create(username: "nina", email: "nina@nina", password_digest: "13774", age: 28,role:"user")
user8=User.create(username: "johny", email: "johny@johny", password_digest: "1264", age: 33,role:"user")
user9=User.create(username: "ela", email: "kela@ela", password_digest: "1904", age: 24,role:"user")
user10=User.create(username: "ida", email: "ida@ida", password_digest: "1534", age:30,role:"user")
  
#Create a showroom 
  
  show_room = ShowRoom.create(
    name: "Motor-Hub",
    address: "123 Main Street",
    location: "Nairobi",
    start_year: 1998
  )
  


#creating 20 random Cars 
car1=Car.create(
    image_url:"https://i.pinimg.com/564x/a0/0a/07/a00a072dfd083d05507f683ddae1e6b4.jpg",
    name:"Toyota probox",
    model:"Station Wagon",
    mileage:"4000km",
    transmission:"Automatic",
    price:620000,
    show_room_id:1

   )
car2=Car.create(
    image_url:"https://i.pinimg.com/564x/2c/5f/79/2c5f79b0f54b5127f8a3741400372339.jpg",
    name:"Mitsubishi RVR",
    model:"SUV",
    mileage:"3200km",
    transmission:"Automatic",
    price:820000,
    show_room_id:1

   )
car3=Car.create(
    image_url:"https://fcache1.pakwheels.com/original/3X/8/1/817b9ff1bc62300abcf95c6460b2337ffdfad286.jpg",
    name:"Toyota Premio 265",
    model:"Sedan",
    mileage:"2000km",
    transmission:"Automatic",
    price:1200000,
    show_room_id:1

   )
car4=Car.create(
    image_url:"https://i.pinimg.com/236x/df/d0/8d/dfd08d6c7f809b088063d8fa33bfefa1.jpg",
    name:"Toyota Vigo",
    model:"Pick Up",
    mileage:"1000km",
    transmission:"Manual",
    price:1600000
   )
car5=Car.create(
    image_url:"https://i.pinimg.com/236x/da/83/7e/da837e4b1abc70cf6133dba7aed3eca5.jpg",
    name:"Subaru Forester SG5",
    model:"SUV",
    mileage:"2500km",
    transmission:"Manual",
    price:1000000,
    show_room_id:1

    )
car6=Car.create(
    image_url:"https://i.pinimg.com/236x/f4/dc/18/f4dc189834a1ee18ca993995ea9e1fbb.jpg",
    name:"Suzuki Swift",
    model:"Hatchback",
    mileage:"4000km",
    transmission:"Automatic",
    price:620000,
    show_room_id:1

  )
car7=Car.create(
    image_url:"https://i.pinimg.com/236x/ec/ef/1f/ecef1fd8d5b4a3751a8df0a3abc19273.jpg",
    name:"Mazda Demio",
    model:"Hatchback",
    mileage:"4500km",
    transmission:"Automatic",
    price:520000
    )
car8=Car.create(
    image_url:"https://i.pinimg.com/236x/08/6f/1e/086f1e150c2c9219fe9a87b5002ce4a3.jpg",
    name:"Isuzu Trooper",
    model:"SUV",
    mileage:"5000km",
    transmission:"Manual",
    price:800000,
    show_room_id:1

    )
car9=Car.create(
    image_url:"https://i.pinimg.com/236x/47/ed/fe/47edfec8009b99632349db495db42380.jpg",
    name:"Toyota prado 120",
    model:"SUV",
    mileage:"2000km",
    transmission:"Manual",
    price:2000000,
    show_room_id:1

   )
car10=Car.create(
    image_url:"https://i.pinimg.com/236x/13/29/40/132940e6260328896ef796c985bf981d.jpg" ,
    name:"Toyota Ractis",
    model:"station wagon",
    mileage:"1000km",
    transmission:"Automatic",
    price:720000,
    show_room_id:1

    )
car11=Car.create(
    image_url:"https://i.pinimg.com/236x/90/15/75/901575494eff0c8b165d423e1348ee79.jpg",
    name:"Mazda CX-5",
    model:"SUV",
    mileage:"3000km",
    transmission:"Automatic",
    price:1800000,
    show_room_id:1

    )
car12=Car.create(
    image_url:"https://i.pinimg.com/236x/1d/49/f8/1d49f8d033836e30d75a43c2debec6ac.jpg",
    name:"Nissan Note",
    model:"Hatchback",
    transmission:"Automatic",
    mileage:"3000km",
    price:880000,
    show_room_id:1
)
car13=Car.create(
    image_url:"https://i.pinimg.com/236x/79/04/26/7904262122675aebd4a4b8a6a056818e.jpg",
    name:"Nissan Teana",
    model:"Sedan",
    mileage:"2000km",
    transmission:"Automatic",
    price:1400000,
    show_room_id:1
    )
car14=Car.create(
    image_url:"https://i.pinimg.com/236x/c9/ae/db/c9aedb29017c246f6af928c5fc80acde.jpg",
    name:"Toyota Fielder",
    model:"Station Wagon",
    mileage:"3000km",
    transmission:"Automatic",
    price:780000,
    show_room_id:1

    )
car15=Car.create(
    image_url:"https://i.pinimg.com/236x/8e/e0/88/8ee088511912f59bb1017c4c98f4d109.jpg",
    name:"Nissan GTR",
    model:"Sportcar",
    mileage:"2500km",
    transmission:"Manual",
    price:1500000
    )
car16=Car.create(
    image_url:"https://resource.digitaldealer.com.au/image/7740423046032eb991a596461333236_900_600-c.jpg",
    name:"Nissan Patrol",
    model:"SUV",
    mileage:"2000km",
    transmission:"Manual",
    price:1800000,
    show_room_id:1

)
car17=Car.create(
    image_url:"https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/story/hero_image/20190426_TOYOTA_NEW_LANCRU.jpg",
    name:"Toyota Land Cruiser 300 series",
    model:"SUV",
    mileage:"0km",
    transmission:"Manual",
    price:30000000,
    show_room_id:1

    )
car18=Car.create(
    image_url:"https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C395/U4845/IMG_49359-large.jpg",
    name:"Range Rover Vogue",
    model:"SUV",
    mileage:"0km",
    transmission:"Manual",
    price:1200000,
    show_room_id:1

    )
car19=Car.create(
    image_url:"https://www.thecarwarehouse.co.uk/userfiles/image/1675867664-3268986a-d539-4ec6-82ef-d39890e28d84.jpeg",
    name:"Subaru Exiga",
    model:"SUV",
    mileage:"1000km",
    transmission:"Manual", 
    price:1100000,
    show_room_id:1

    )
car20=Car.create(
    image_url:"https://www.stcjapan.net/img/products/610bfadbcfd0e.jpg",
    name:"Toyota Mark X",
    model:"Sedan,C",
    mileage:"1000km",
    transmission:"Automatic",
    price:1800000,
    show_room_id:1

    )

   #Should come after the user and car id 

    15.times do 
        review = Review.create(
          user_id: rand(1..20),
          car_id: rand(1..20),
        rating: rand(1..5),
        comments: Faker::Lorem.sentence
        )
      end