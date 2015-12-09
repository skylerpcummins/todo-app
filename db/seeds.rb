# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Todo.create!(title: 'laundry', body: 'wash and dry', done: false)
Todo.create!(title: 'groceries', body: 'milk juice eggs bread', done: false)
Todo.create!(title: 'clean room', body: 'cause that shit is dirty', done: false)
Todo.create!(title: 'work out', body: 'strong mind strong body', done: false)
Todo.create!(title: 'stretch', body: 'gotta stay healthy', done: false)
Todo.create!(title: 'fuck', body: 'gotta stay sane', done: false)
