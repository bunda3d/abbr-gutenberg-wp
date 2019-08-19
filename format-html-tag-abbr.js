(function (wp) {
  // var withSelect = wp.data.withSelect;
  // var ifCondition = wp.compose.ifCondition;
  // var compose = wp.compose.compose;
  var AbbrButton = function( props ) {
    return wp.element.createElement(
      wp.blockEditor.RichTextToolbarButton, {
        icon: 'editor-code',
        title: 'Abbreviation',
        onClick: function () {
          props.onChange(wp.richText.toggleFormat(
            props.value,
            { type: 'core/abbreviation' }
          ) );
        },
        isActive: props.isActive,
      }
    );
  }
  /*
  var ConditionalButton = compose(
    withSelect(function (select) {
      return {
        sectedBlock: select('core/editor').getSelectedBlock()
      }
    }),
    ifCondition(function (props) {
      return (
        props.selectedBlock &&
        props.selectedBlock.name === 'core/paragraph'
      );
    })
  )(AbbrButton); 
  */
  wp.richText.registerFormatType(
    'core/abbreviation', {
      title: 'Abbreviation',
      tagName: 'abbr',
      className: null,
      edit: AbbrButton,
    }
  );
} )( window.wp );
