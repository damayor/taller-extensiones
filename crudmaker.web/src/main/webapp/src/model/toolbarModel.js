define([], function() {
	App.Model.ToolbarModel = Backbone.Model.extend({
		defaults : {
			componentId : '',
			name : '-',
			title : '',
			icon : 'globe',
			showTitle : true,
			createName : 'Crear',
			showCreate : true,
			saveName : 'Salvar',
			showSave : false,
			cancelName : 'Cancelar',
			showCancel : false,
			refreshName : 'Actualizar',
			showRefresh : true,
			searchName : 'Search',
			searchIcon : 'glyphicon-search',
			showSearch : false,
			printName : 'Print',
			printIcon : 'glyphicon-print',
			showPrint : false,
			showAddButton : false,
			addName : 'Agregar',
			buttons : []
		},
		initialize : function() {
			this.set('buttons', new Array());
		}
	});
	return App.Model.ToolbarModel;
});