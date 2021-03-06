-- 1. GO to mysql client
-- 2. create database  insta_pp;
-- 3. create sql script 
-- 4. go back to mysql 
        -- type source sqlscript path 
CREATE TABLE IF NOT EXISTS user(
    uid VARCHAR(80) PRIMARY KEY,
    handle VARCHAR(30) NOT NULL UNIQUE,
    email_id VARCHAR(50) UNIQUE,
    phone BIGINT(10) UNIQUE,
    bio VARCHAR(150),
    is_verified BOOLEAN DEFAULT false,--no boolean in sql use tinyint;
    is_public BOOLEAN DEFAULT true,
    p_img_url VARCHAR(255) 
);

CREATE TABLE IF NOT EXISTS user_follower(
    user_id VARCHAR(80) NOT NULL,
    follower_id VARCHAR(80) NOT NULL,
    is_pending BOOLEAN DEFAULT true,
    INDEX (user_id)
);

CREATE TABLE IF NOT EXISTS post(
    p_id VARCHAR(80) PRIMARY KEY ,
    img_url VARCHAR(512) NOT NULL,
    user_id VARCHAR(80) NOT NULL,
    created_at DATETIME,
    descp VARCHAR(200),   
    INDEX (user_id)
)
CREATE TABLE IF NOT EXISTS comment(
    id VARCHAR(80) PRIMARY KEY,
    descp VARCHAR(200) NOT NULL,
    user_id VARCHAR(80) NOT NULL,
    p_id VARCHAR(80) NOT NULL,
    created_at DATETIME NOT NULL,
    INDEX(p_id) 
);

-- CREATE TABLE IF NOT EXISTS user_following(
--     uid VARCHAR(80) NOT NULL
--     following_id VARCHAR(80) NOT NULL
-- )

--  CREATE TABLE IF NOT EXISTS user_following(
--     uid VARCHAR(80) NOT NULL
--     p_id VARCHAR(80) NOT NULL
-- )

