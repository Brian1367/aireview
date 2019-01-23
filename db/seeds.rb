# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
airlines1 = Airline.create(name: 'American Airlines', destinations:"Argentina", overall_rating: 5)

airlines2 = Airline.create(name: 'Delta Airlines', destinations:'Morroccoa', overall_rating: 4)
