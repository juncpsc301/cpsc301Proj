/*
 * File: app.js
 * Date: Fri Mar 23 2012 14:43:03 GMT-0600 (Mountain Daylight Time)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 */

Ext.Loader.setConfig({
    enabled: true
});

var username,admin;

var userNameStore = new Ext.data.Store({
    fields: ['username','admin'],  
    proxy: {
        type: 'ajax',
        method: 'GET',
        url: '/session',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});

userNameStore.load({
  scope: this,
  callback: function(record,options,success){
    username = userNameStore.proxy.reader.jsonData.data.username;
    admin = userNameStore.proxy.reader.jsonData.data.admin;
  }
});

Ext.application({
    name: 'GUI',
    appFolder: 'gui/mainWindow',

    controllers: [
        'Discussions',
        'IM',
        'Main',
        'Users'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {

            layout: {
                type: 'border',
                padding: 5
            },
            defaults: {
                split: true
            },
            items: [
				{	   
                    region: 'north',
					title: 'Calgary Emergency Medicine',
					//html: "<b>title</b>",
					dockedItems: [{
						dock: 'bottom',
						xtype: 'toolbar',
						items: ["Welcome ",username,'->',
						{
						  text: 'Log out',
						  action: 'logout'
						}
						]
					}]
                },
                {
                    xtype: 'mainpanel',
                    region: 'center',
                    border: false
                },
                {
                    xtype: 'impanel',
                    region: 'east',
                    collapsible: true
                }
            ]
        });
    }
});