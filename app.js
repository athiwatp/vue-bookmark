var app = new Vue({
    el: '#app',
    data: {
        addButton: true,
        editButtons: false,
        bookmark_title: null,
        bookmark_link: null,
        bookmarks: [
            {
                title: 'VueJS Website',
                link: 'https://vuejs.org/'
            },
            {
                title: 'Bootstrap Website',
                link: 'www.getbootstrap.com'
            }
        ],
    },
    methods: {
        addBookmark: function() {
            var bookmark = {  
                title: this.bookmark_title,
                link: this.bookmark_link
            };

            this.bookmarks.push(bookmark)
            this.bookmark_link = null
            this.bookmark_title = null
        },
        editBookmark: function(bookmark) {
            this.selectedBookmark = bookmark
            this.bookmark_title = bookmark.title
            this.bookmark_link = bookmark.link
            this.editButtons = true
            this.addButton = false
        },
        cancelEdit: function() {
            this.editButtons = false
            this.addButton = true
            this.bookmark_link = null
            this.bookmark_title = null
        },
        updateBookmark: function() {
            var index = this.bookmarks.indexOf(this.selectedBookmark)
            this.bookmarks[index].title = this.bookmark_title
            this.bookmarks[index].link = this.bookmark_link
        },
        removeBookmark: function(bookmark) {
            var index = this.bookmarks.indexOf(bookmark)
            this.bookmarks.splice(index, 1)
        }
    }
})