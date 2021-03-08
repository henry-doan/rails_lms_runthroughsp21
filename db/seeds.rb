roles = ['teacher', 'ta', 'student']
10.times do
  course = Course.create(
    name: Faker::Educator.course
  )
 
  10.times do 
    user = User.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name
    )

    Enrollment.create(
      role: roles.sample,
      course_id: course.id,
      user_id: user.id
    )
  end
end

puts "Data Seeded."