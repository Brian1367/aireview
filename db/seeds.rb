airlines1 = Airline.create(name: 'American Airlines', destinations:"Argentina", overall_rating: 5)

airlines2 = Airline.create(name: 'Delta Airlines', destinations:'Morroccoa', overall_rating: 4)

airlines3 = Airline.create(name: 'Delta Airlines', destinations:'Morroccoa', overall_rating: 4)



user1 = User.create(email: 'joe@gmail.com', password: 'password')
user2 = User.create(email: 'Mike@gmail.com', password:'password')
user3 = User.create(email: 'casi@gmail.com', password: 'password')


review1 = Review.create(user_id: 1, description: 'Very Cool', price_rating: 2, service_rating: 3, reliability_rating: 2, overall_rating: 2, airline_id: 1 )
review2 = Review.create(user_id: 2, description: 'Very Rad', price_rating: 2, service_rating: 3, reliability_rating: 2, overall_rating: 2, airline_id: 2 )
review3 = Review.create(user_id: 3, description: 'Very Wicked', price_rating: 2, service_rating: 3, reliability_rating: 2, overall_rating: 2, airline_id: 3 )
