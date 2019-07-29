const { precompile } = require('@glimmer/compiler');

const wireFormat = precompile(`
<button id="ember10" class="btn o__primary ember-view" role="button" type="button">  <div class="layout__media">
    <div class="layout__media__ext">
        <span><!----> Save</span>
    </div>
<!---->  </div>
</button>
`);

console.log(wireFormat)
