create table posts (
    id serial primary key,
    user_id integer references users(id)
    title text,
    picture text,
    content text
)