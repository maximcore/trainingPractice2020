(function() {
    var posts = [
    {
        id: '1',
        description: 'Всем привет меня зовут Чармандер и я боюсь воды.',
        createdAt: new Date('2020-03-17T23:01:00'),
        author: 'Charmander',
        photoLink: 'https://i.pinimg.com/originals/e7/0e/d0/e70ed0b54f9230c56c2e3bd2958d68a4.jpg'
    },
    {
        id: '2',
        description: 'Я Гена Букин, люблю свою жену и футбол',
        createdAt: new Date('2020-03-17T23:02:00'),
        author: 'Gena Bookin',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '3',
        description: 'привет всем меня зовут стич и у меня всё хорошо я люблю слушать музыку и танцевать с друзьями',
        createdAt: new Date('2020-03-17T23:03:00'),
        author: 'Stitch',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '4',
        description: 'а ещё я больше всего люблю кушать еду и пить воду не поверите в этот факт',
        createdAt: new Date('2020-03-17T23:04:00'),
        author: 'Stitch',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '5',
        description: 'Пикачу на связи',
        createdAt: new Date('2020-03-17T23:05:00'),
        author: 'Pikachu',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '6',
        description: 'Моя подруга Лило позвала меня в гости',
        createdAt: new Date('2020-03-17T23:06:00'),
        author: 'Stitch',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '7',
        description: 'Я - Соник, и я очень быстрый',
        createdAt: new Date('2020-03-14T23:07:00'),
        author: 'Sonic',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '8',
        description: 'Я и мой друг Эш',
        createdAt: new Date('2020-03-12T23:08:00'),
        author: 'Pikachu',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '9',
        description: 'Какой же Патрик глупый...',
        createdAt: new Date('2020-03-12T23:09:00'),
        author: 'Sponge Bob',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '10',
        description: 'Губка Боб сказал, что патрик глупый. Я тоже так думаю. Только кто этот Патрик?',
        createdAt: new Date('2020-03-09T23:10:00'),
        author: 'Patrick Star',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '11',
        description: 'С 8 марта',
        createdAt: new Date('2020-03-08T23:11:00'),
        author: 'Patrick Star',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '12',
        description: 'Я звезда',
        createdAt: new Date('2020-03-06T23:12:00'),
        author: 'Patrick Star',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    }, {
        id: '13',
        description: 'Скучаю',
        createdAt: new Date('2020-03-05T23:13:00'),
        author: 'Stitch',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    }, {
        id: '14',
        description: 'хаюхай с вами патрик стар',
        createdAt: new Date('2020-03-04T23:14:00'),
        author: 'Patrick Star',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    }, {
        id: '15',
        description: 'Максиматор - моя любимая соц. сеть',
        createdAt: new Date('2020-03-01T23:15:00'),
        author: 'Sponge Bob',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    }, {
        id: '16',
        description: 'У Сквидварда был крабсбургер',
        createdAt: new Date('2020-02-28T23:16:00'),
        author: 'Charmander',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    }, {
        id: '17',
        description: 'с 23 февраля, мужики',
        createdAt: new Date('2020-02-23T23:17:00'),
        author: 'Charmander',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    }, {
        id: '18',
        description: 'Привет всем эт я Чармандер вы меня не узнали или что',
        createdAt: new Date('2020-02-17T23:18:00'),
        author: 'Charmander',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '19',
        description: 'Всю кукурузу съел',
        createdAt: new Date('2020-02-16T23:19:00'),
        author: 'Stitch',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '20',
        description: 'lalala',
        createdAt: new Date('2020-02-12T23:20:00'),
        author: 'Pikachu',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
];

 function getPost(id) {
        if (id < 1 && id > posts.length + 1) {
            console.log('enter correct id');
            return null;
        }
        return posts[id - 1];
    }

    function getPosts(skip = 0, top = 10, filterConfig) {
        gpResult = new Array();
        if (typeof (filterConfig) == typeof (undefined)) {
            for (i = skip; i < skip + top; i++) {
                gpResult.push(posts[i])
            }
        } else if (typeof (filterConfig.author) != typeof (undefined) && (typeof (filterConfig.createdAt) === typeof (undefined))) {
            for (i = skip; i < skip + top; i++) {
                if (filterConfig.author == posts[i].author)
                    gpResult.push(posts[i])
            }
        } else if (typeof (filterConfig.author) === typeof (undefined) && typeof (filterConfig.createdAt) != typeof (undefined)) {
            for (i = skip; i < skip + top; i++) {
                if (posts[i].createdAt.getFullYear() == filterConfig.createdAt.getFullYear() && posts[i].createdAt.getMonth() == filterConfig.createdAt.getMonth()
                    && posts[i].createdAt.getDate() == filterConfig.createdAt.getDate()) {
                    gpResult.push(posts[i])
                }
            }
        } else if (typeof (filterConfig.author) != typeof (undefined) && typeof (filterConfig.createdAt) != typeof (undefined)) {
            for (i = skip; i < skip + top; i++) {
                if (posts[i].createdAt.getFullYear() == filterConfig.createdAt.getFullYear() && posts[i].createdAt.getMonth() == filterConfig.createdAt.getMonth()
                    && posts[i].createdAt.getDate() == filterConfig.createdAt.getDate() && posts[i].author == filterConfig.author) {
                    gpResult.push(posts[i]);
                }
            }
        }
        return gpResult
    }

    function validatePost(post) {
        return ((typeof (post.author)) == 'string') && ((typeof (post.id) == 'string')) &&
            (typeof (post.description) == 'string') && (post.createdAt instanceof Date) &&
            (typeof (post.photoLink) == 'string');
    }

    function addPost(post) {
        if (validatePost(post)) {
            posts.push(post);
            return true;
        }
        return false;
    }

    function editPost(post, desc = post.description, phLink = post.photoLink) {
        if (validatePost(post)) {
            if (post.description == desc && post.photoLink == phLink) {
                return true;
            } else if (post.description == desc && post.photoLink != phLink) {
                post.photoLink = phLink
            } else if (post.description != desc && post.photoLink == phLink) {
                post.description = desc;
            }
            return true;
        }
        return false;
    }

    function removePost(id) {
        posts.splice(id, 1)
    }


})();




