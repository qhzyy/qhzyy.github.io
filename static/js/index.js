// 菜单收缩
$.sidebarMenu = function (b) {
    var a = 300
    var myIframe = $('#my-iframe')

    $(b).on('click', 'li a', function (f) {
        var c = $(this)
        var d = c.next()
        var currentTarget = $(f.currentTarget)

        if (currentTarget.attr('zyy-menu')) {
            myIframe.attr('src', currentTarget.attr('href'))            
            return false
        }

        if (d.is('.treeview-menu') && d.is(':visible')) {
            d.slideUp(a, function () {
                d.removeClass('menu-open')
            })
            d.parent('li').removeClass('active')
        } else {

            if ((d.is('.treeview-menu')) && (!d.is(':visible'))) {
                var g = c.parents('ul').first()
                var i = g.find('ul:visible').slideUp(a)
                i.removeClass('menu-open')
                var h = c.parent('li')
                d.slideDown(a, function () {
                    d.addClass('menu-open')
                    g.find('li.active').removeClass('active')
                    h.addClass('active')
                })
            }
        }

        if (d.is('.treeview-menu')) {
            f.preventDefault()
        }
    })
}

$.sidebarMenu($('.sidebar-menu'))

// 菜单展开
