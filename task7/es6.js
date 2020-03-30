(function()
{
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
            createdAt: new Date('2020-02-17T23:03:00'),
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
            createdAt: new Date('2019-03-17T23:05:00'),
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
            createdAt: new Date('2020-01-12T23:08:00'),
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

    class PostCollection {
        constructor(array, gpResult) {
            this.array = array;
            this.gpResult = gpResult;
        }

        getPage(skip = 0, top = 10, filterConfig) {
            var i = skip;
            if (typeof (filterConfig) == typeof (undefined)) {
                for (; i < skip + top; i++) {
                    gpResult.push(this.array[i])
                }
            } else if (typeof (filterConfig.author) != typeof (undefined) && (typeof (filterConfig.createdAt) === typeof (undefined))) {
                for (; i < skip + top; i++) {
                    if (filterConfig.author == this.array[i].author)
                        gpResult.push(this.array[i])
                }
            } else if (typeof (filterConfig.author) === typeof (undefined) && typeof (filterConfig.createdAt) != typeof (undefined)) {
                for (; i < skip + top; i++) {
                    if (this.array[i].createdAt.getFullYear() == filterConfig.createdAt.getFullYear() && this.array[i].createdAt.getMonth() == filterConfig.createdAt.getMonth()
                        && this.array[i].createdAt.getDate() == filterConfig.createdAt.getDate()) {
                        gpResult.push(array[i])
                    }
                }
            } else if (typeof (filterConfig.author) != typeof (undefined) && typeof (filterConfig.createdAt) != typeof (undefined)) {
                for (; i < skip + top; i++) {
                    if (this.array[i].createdAt.getFullYear() == filterConfig.createdAt.getFullYear() && this.array[i].createdAt.getMonth() == filterConfig.createdAt.getMonth()
                        && this.array[i].createdAt.getDate() == filterConfig.createdAt.getDate() && this.array[i].author == filterConfig.author) {
                        gpResult.push(this.array[i]);
                    }
                }
            }
            return gpResult.sort(function (a, b) {
                var dateA = new Date(a.createdAt), dateB = new Date(b.createdAt);
                return dateA - dateB;
            })
        }

        get(id) {
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i].id === id.toString()) {
                    return this.array[i];
                }
            }
            console.log('not found')
            return false;
        }

        static validatePost(post) {
            return ((typeof (post.author)) == 'string') && ((typeof (post.id) == 'string')) &&
                (typeof (post.description) == 'string') && (post.createdAt instanceof Date) &&
                (typeof (post.photoLink) == 'string');
        }

        add(post) {
            if (this.validatePost(post)) {
                this.array.push(post);
                return true;
            }
            return false;
        }

        edit(id, desc = '', phLink = '') {
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i].id === id.toString() && this.validatePost(this.array[i])) {
                    if (desc != '' && phLink != '') {
                        this.array[i].description = desc;
                        this.array[i].photoLink = phLink;
                        return true;
                    } else if (desc == desc && phLink != '') {
                        this.array[i].photoLink = phLink
                        return true;
                    } else if (desc != '' && phLink == phLink) {
                        this.array[i].description = desc;
                        return true;
                    } else if (desc == '' && phLink == '') {
                        return true;
                    }
                }
            }
            return false;
        }

        remove(id) {
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i].id === id.toString()) {
                    this.array.splice(i, 1)
                    return true;
                }
            }
            return false;
        }

        addAll(posts){
            let nodValid = new Array();
            for(let i = 0;i<posts.length;i++){
                if(PostCollection.validatePost(posts[i])){
                   this.array.push(posts[i]);
                }
                else{
                    badPosts.push(posts[i]);
                }
            }
            return notValid;
        }

        clear(deleteLastPosts = this.array.length){
            this.array.splice(0,deleteLastPosts)
        }
    }


    gpResult = new Array();
    pc = new PostCollection(posts, gpResult);
    /*console.log(pc.array)
    console.log(pc.remove(1))
    console.log(pc.array)
    */
    /*console.log(pc.add({
        id: '191',
        description: 'testpost',
        createdAt: new Date('2020-02-16T23:19:00'),
        author: 'Stitch',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    }))
    console.log(pc.array)*/
//console.log(pc.getPage(0,10,{author : 'Pikachu', createdAt : new Date('2019-03-17')}));
})();