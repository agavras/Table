var BtnScript = pc.createScript('btnScript');

BtnScript.attributes.add('textEntity', {
    type: 'entity',
    description: 'The entity that we want to update when the button is clicked'
});
BtnScript.attributes.add('description', {type: 'string'});

// initialize code called once per entity
BtnScript.prototype.initialize = function() {
    this.entity.button.on('click', function(event) {
        var input = window.prompt("Entrer une valeur pour le texte" );
        // this.textEntity.element.text = this.description;
            this.textEntity.element.text = input;
    }, this);
};