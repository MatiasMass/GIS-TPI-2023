import './LayersPanel.css'

function LayersPanel() {

  const options = [
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "opcoxxcoxdsiodsjdis nin i3 sdddddddddsds",
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "opcoxxcoxdsiodsjdis nin i3 sdddddddddsds",
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "opcoxxcoxdsiodsjdis nin i3 sdddddddddsds",
  ]

  const toggleButton = function() {
    var optionsContainer = document.getElementById('options-container');
    optionsContainer.style.display = optionsContainer.style.display === 'none' ? 'block' : 'none';
  };

  document.addEventListener('click', function(event) {
    var optionsContainer = document.getElementById('options-container');
    var toggleButton = document.getElementById('toggleButton');

    if (!toggleButton.contains(event.target) && !optionsContainer.contains(event.target)) {
      optionsContainer.style.display = 'none';
    }
  });


  return (
    <>
    <div
      className="panel"
      id="toggleButton"
      onClick={toggleButton}
    >Seleccionar Capas</div>
    <div id="options-container">
      {options.map((option, index) => {
        return (
          <div className="options" key={index}>{option}</div>
        )
      })}
</div>
    </>
  )
}

export default LayersPanel