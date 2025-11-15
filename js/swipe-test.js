class SwipeTest {
    constructor() {
        this.cards = []; // Массив карточек из JSON
        this.currentIndex = 0;
        this.results = []; // Результаты свайпов
        this.userTags = {};

        this.loadCards();
        this.init();
    }

    loadCards() {
        // JSON с карточками для свайп-теста
        this.cards = [
            {
                "id": 1,
                "title": "Кофейня с видом на Неву",
                "description": "Уютное место у воды, ароматный кофе и десерты с видом на набережную.",
                "image_url": "https://example.com/images/cafe_neva.jpg",
                "tags": {
                    "indoor": 1,
                    "romantic": 1,
                    "calm": 1,
                    "medium_price": 1,
                    "day": 1
                }
            },
            {
                "id": 2,
                "title": "Прогулка в Летнем саду",
                "description": "Исторический парк, фонтаны, статуи и прохладная тень аллей.",
                "image_url": "https://example.com/images/summer_garden.jpg",
                "tags": {
                    "outdoor": 1,
                    "nature": 1,
                    "walk": 1,
                    "calm": 1,
                    "free": 1,
                    "day": 1
                }
            },
            {
                "id": 3,
                "title": "Ночной бар",
                "description": "Современный бар с коктейлями, диджеем и танцполом.",
                "image_url": "https://example.com/images/blue_whale_bar.jpg",
                "tags": {
                    "indoor": 1,
                    "nightlife": 1,
                    "fun": 1,
                    "noisy": 1,
                    "expensive": 1,
                    "evening": 1
                }
            },
            {
                "id": 4,
                "title": "Катание на коньках в Юсуповском саду",
                "description": "Зимний каток под открытым небом с музыкой и горячим глинтвейном.",
                "image_url": "https://example.com/images/ice_skating.jpg",
                "tags": {
                    "outdoor": 1,
                    "active": 1,
                    "sport": 1,
                    "cheap": 1,
                    "winter": 1
                }
            },
            {
                "id": 5,
                "title": "Выставка современного искусства",
                "description": "Необычные инсталляции и перформансы от молодых художников.",
                "image_url": "https://example.com/images/art_exhibition.jpg",
                "tags": {
                    "indoor": 1,
                    "culture": 1,
                    "calm": 1,
                    "medium_price": 1,
                    "any_season": 1
                }
            },
            {
                "id": 6,
                "title": "Фестиваль уличной еды",
                "description": "Фудтраки, музыка, мастер-классы и живая атмосфера.",
                "image_url": "https://example.com/images/food_festival.jpg",
                "tags": {
                    "outdoor": 1,
                    "fun": 1,
                    "cheap": 1,
                    "summer": 1
                }
            },
            {
                "id": 7,
                "title": "Поездка на велосипеде вдоль Финского залива",
                "description": "Свежий воздух, вид на воду и спортивное настроение.",
                "image_url": "https://example.com/images/bike_gulf.jpg",
                "tags": {
                    "outdoor": 1,
                    "active": 1,
                    "sport": 1,
                    "nature": 1,
                    "free": 1,
                    "day": 1
                }
            },
            {
                "id": 8,
                "title": "Кинотеатр под открытым небом",
                "description": "Фильм под звёздами, уютные пледы и попкорн.",
                "image_url": "https://example.com/images/rooftop_cinema.jpg",
                "tags": {
                    "outdoor": 1,
                    "culture": 1,
                    "romantic": 1,
                    "medium_price": 1,
                    "summer": 1,
                    "evening": 1
                }
            },
            {
                "id": 9,
                "title": "Антикафе с настольными играми",
                "description": "Плати за время, играй в настолки, пей чай и общайся.",
                "image_url": "https://example.com/images/boardgames_cafe.jpg",
                "tags": {
                    "indoor": 1,
                    "fun": 1,
                    "friends": 1,
                    "cheap": 1,
                    "any_season": 1
                }
            },
            {
                "id": 10,
                "title": "Прогулка по Эрмитажу",
                "description": "Познавательно, спокойно и атмосферно.",
                "image_url": "https://example.com/images/history_museum.jpg",
                "tags": {
                    "indoor": 1,
                    "culture": 1,
                    "calm": 1,
                    "medium_price": 1,
                    "day": 1
                }
            },
            {
                "id": 11,
                "title": "Прогулка по крышам",
                "description": "Невероятные виды на город и ощущение свободы.",
                "image_url": "https://example.com/images/rooftop_walk.jpg",
                "tags": {
                    "outdoor": 1,
                    "active": 1,
                    "romantic": 1,
                    "fun": 1,
                    "medium_price": 1,
                    "summer": 1
                }
            },
            {
                "id": 12,
                "title": "Мастер-класс по гончарному делу",
                "description": "Расслабляющее творчество своими руками.",
                "image_url": "https://example.com/images/ceramic_workshop.jpg",
                "tags": {
                    "indoor": 1,
                    "culture": 1,
                    "creative": 1,
                    "calm": 1,
                    "medium_price": 1
                }
            },
            {
                "id": 13,
                "title": "Поход в аквапарк",
                "description": "Горки, волны и весёлое настроение для компании.",
                "image_url": "https://example.com/images/aquapark.jpg",
                "tags": {
                    "indoor": 1,
                    "active": 1,
                    "fun": 1,
                    "friends": 1,
                    "expensive": 1,
                    "any_season": 1
                }
            },
            {
                "id": 14,
                "title": "Конная прогулка на природе",
                "description": "Спокойствие, красота и единение с животными.",
                "image_url": "https://example.com/images/dog_walk.jpg",
                "tags": {
                    "outdoor": 1,
                    "active": 1,
                    "kindness": 1,
                    "cheap": 1,
                    "day": 1
                }
            },
            {
                "id": 15,
                "title": "Романтический ужин в ресторане на крыше",
                "description": "Свечи, панорама города и живая музыка.",
                "image_url": "https://example.com/images/rooftop_dinner.jpg",
                "tags": {
                    "indoor": 1,
                    "romantic": 1,
                    "expensive": 1,
                    "evening": 1
                }
            }
        ];
    }

    init() {
        this.renderCard();
        this.bindEvents();
        this.updateProgress();
    }

    bindEvents() {
        document.getElementById('likeBtn').addEventListener('click', () => {
            this.handleSwipe('right');
        });

        document.getElementById('dislikeBtn').addEventListener('click', () => {
            this.handleSwipe('left');
        });
    }

    renderCard() {
        const container = document.getElementById('swipeContainer');
        if (!container) return;

        container.innerHTML = '';

        if (this.currentIndex >= this.cards.length) {
            this.completeTest();
            return;
        }

        const cardData = this.cards[this.currentIndex];
        const card = this.createCardElement(cardData);
        container.appendChild(card);

        this.setupSwipeGestures(card);
    }

    createCardElement(cardData) {
        const card = document.createElement('div');
        card.className = 'swipe-card active';
        card.dataset.cardId = cardData.id;

        // Создаем индикаторы
        const indicators = document.createElement('div');
        indicators.className = 'swipe-indicators';
        indicators.innerHTML = `
            <div class="dislike-indicator">👎 Не нравится</div>
            <div class="like-indicator">👍 Нравится</div>
        `;

        // Создаем контент карточки
        const imageDiv = document.createElement('div');
        imageDiv.className = 'card-image';
        // В реальном приложении здесь будет <img src="${cardData.image_url}">
        imageDiv.innerHTML = `<i class="fas fa-landscape"></i>`; // Заглушка для изображения

        const contentDiv = document.createElement('div');
        contentDiv.className = 'card-content';

        // Создаем теги из объекта tags
        const tags = Object.keys(cardData.tags || {});
        const tagsHTML = tags.map(tag => `<span class="tag">${this.formatTag(tag)}</span>`).join('');

        contentDiv.innerHTML = `
            <h3>${cardData.title}</h3>
            <p>${cardData.description}</p>
            <div class="card-tags">${tagsHTML}</div>
        `;

        card.appendChild(indicators);
        card.appendChild(imageDiv);
        card.appendChild(contentDiv);

        return card;
    }

    formatTag(tag) {
        const tagMap = {
            'indoor': '🏠 В помещении',
            'outdoor': '🌳 На улице',
            'romantic': '💝 Романтическое',
            'calm': '😌 Спокойное',
            'active': '🏃 Активное',
            'sport': '⚽ Спорт',
            'nature': '🌿 Природа',
            'nightlife': '🌃 Ночная жизнь',
            'fun': '🎉 Веселье',
            'noisy': '🔊 Шумное',
            'culture': '🎭 Культура',
            'creative': '🎨 Творческое',
            'friends': '👥 С друзьями',
            'kindness': '❤️ Доброта',
            'free': '💰 Бесплатно',
            'cheap': '💰 Недорогое',
            'medium_price': '💰💰 Средняя цена',
            'expensive': '💰💰💰 Дорогое',
            'day': '🌞 Дневное',
            'evening': '🌙 Вечернее',
            'winter': '⛄ Зимнее',
            'summer': '☀️ Летнее',
            'any_season': '🔄 В любое время года',
            'walk': '🚶 Прогулка'
        };

        return tagMap[tag] || tag;
    }

    setupSwipeGestures(card) {
        let startX = 0;
        let currentX = 0;
        let isSwiping = false;

        const startSwipe = (clientX) => {
            startX = clientX;
            currentX = startX;
            isSwiping = true;
            card.style.transition = 'none';
        };

        const updateSwipe = (clientX) => {
            if (!isSwiping) return;

            currentX = clientX;
            const diff = currentX - startX;
            const rotation = (diff / 10) * (diff > 0 ? 1 : -1);

            card.style.transform = `translateX(${diff}px) rotate(${rotation}deg)`;

            // Показываем индикаторы
            const likeIndicator = card.querySelector('.like-indicator');
            const dislikeIndicator = card.querySelector('.dislike-indicator');

            if (diff > 50) {
                likeIndicator.classList.add('show');
                dislikeIndicator.classList.remove('show');
            } else if (diff < -50) {
                dislikeIndicator.classList.add('show');
                likeIndicator.classList.remove('show');
            } else {
                likeIndicator.classList.remove('show');
                dislikeIndicator.classList.remove('show');
            }
        };

        const endSwipe = () => {
            if (!isSwiping) return;
            isSwiping = false;

            card.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

            const diff = currentX - startX;
            const likeIndicator = card.querySelector('.like-indicator');
            const dislikeIndicator = card.querySelector('.dislike-indicator');

            if (diff > 100) {
                // Свайп вправо - лайк
                this.swipeCard('right');
            } else if (diff < -100) {
                // Свайп влево - дизлайк
                this.swipeCard('left');
            } else {
                // Возвращаем карточку на место
                card.style.transform = 'translateX(0) rotate(0deg)';
                likeIndicator.classList.remove('show');
                dislikeIndicator.classList.remove('show');
            }
        };

        // Touch events
        card.addEventListener('touchstart', (e) => {
            startSwipe(e.touches[0].clientX);
        });

        card.addEventListener('touchmove', (e) => {
            updateSwipe(e.touches[0].clientX);
        });

        card.addEventListener('touchend', endSwipe);

        // Mouse events
        card.addEventListener('mousedown', (e) => {
            startSwipe(e.clientX);
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        });

        const handleMouseMove = (e) => {
            updateSwipe(e.clientX);
        };

        const handleMouseUp = () => {
            endSwipe();
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }

    handleSwipe(direction) {
        this.swipeCard(direction);
    }

    swipeCard(direction) {
        const card = document.querySelector('.swipe-card');
        if (!card) return;

        const cardId = parseInt(card.dataset.cardId);
        const cardData = this.cards.find(card => card.id === cardId);

        // Сохраняем результат
        this.results.push({
            cardId: cardId,
            direction: direction,
            timestamp: Date.now()
        });

        this.updateUserTags(cardData, direction);

        // Анимируем уход карточки
        card.classList.add('removing');
        card.classList.add(direction === 'right' ? 'swipe-right' : 'swipe-left');

        // Переходим к следующей карточке
        this.currentIndex++;

        if (this.currentIndex < this.cards.length) {
            setTimeout(() => {
                this.renderCard();
                this.updateProgress();
            }, 300);
        } else {
            // Все карточки просмотрены
            setTimeout(() => {
                this.completeTest();
            }, 300);
        }
    }

    updateProgress() {
        const progress = (this.currentIndex / this.cards.length) * 100;
        const progressFill = document.getElementById('swipeProgressFill');
        const swipeCount = document.getElementById('swipeCount');

        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }

        if (swipeCount) {
            swipeCount.textContent = `${this.currentIndex + 1}/${this.cards.length}`;
        }
    }

    updateUserTags(cardData, direction) {
        if (direction === 'right') {
            // Пользователю понравилась карточка - добавляем её теги
            if (cardData.tags) {
                Object.keys(cardData.tags).forEach(tag => {
                    if (cardData.tags[tag] === 1) {
                        // Увеличиваем вес тега или устанавливаем 1, если его не было
                        this.userTags[tag] = (this.userTags[tag] || 0) + 1;
                    }
                });
            }
        } else if (direction === 'left') {
            // Пользователю не понравилась карточка - уменьшаем вес тегов
            if (cardData.tags) {
                Object.keys(cardData.tags).forEach(tag => {
                    if (cardData.tags[tag] === 1) {
                        // Уменьшаем вес, но не ниже 0
                        this.userTags[tag] = Math.max(0, (this.userTags[tag] || 0) - 0.5);

                        // Если вес стал 0, можно удалить тег (опционально)
                        if (this.userTags[tag] === 0) {
                            delete this.userTags[tag];
                        }
                    }
                });
            }
        }
    }

    completeTest() {
        this.normalizeTags();
        console.log('Completing swipe test, userTags:', this.userTags);
        // Сохраняем результаты в localStorage
        
        localStorage.setItem('swipeTestResults', JSON.stringify(this.results));
        localStorage.setItem('swipeTestCompleted', 'true');

        this.updateUserData();

        setTimeout(function () {
            window.location.href = 'index.html';
        }, 300);

    }

    updateUserData() {
        // Получаем существующие данные пользователя или создаем новые
        let userData = JSON.parse(localStorage.getItem('userData')) || {};

        // Обновляем теги
        userData = {
            ...userData, // сохраняем все существующие поля
            tags: this.userTags // обновляем только теги
        };

        // Сохраняем обратно
        localStorage.setItem('userData', JSON.stringify(userData));

        const savedData = JSON.parse(localStorage.getItem('userData'));
        console.log('UserData after update:', savedData);
        console.log('Tags saved successfully:', savedData.tags);
    }

    normalizeTags() {
        // Можно нормализовать веса тегов от 0 до 1
        const maxWeight = Math.max(...Object.values(this.userTags));
        if (maxWeight > 0) {
            Object.keys(this.userTags).forEach(tag => {
                this.userTags[tag] = this.userTags[tag] / maxWeight;
            });
        }
    }
}

// Initialize swipe test when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SwipeTest();
});