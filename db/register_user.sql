insert into users
(email,password)
values
($1, $2)
RETURNING email, profile_pic