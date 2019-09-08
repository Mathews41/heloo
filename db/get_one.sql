select * from posts p 
join users u on p.author_id = u.id
where p.author_id = $1;