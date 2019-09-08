insert into posts
(user_id, title, picture, content)
values
($1,$2,$3)
RETURNING title, picture,content;