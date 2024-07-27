const ToggleSwitch = ({isChecked, toggleChecked}) => {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleChecked;
        }
      };

    return (
    <div
        role="switch"
        aria-checked={isChecked}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        onClick={toggleChecked}
        className={`relative w-9 h-5 rounded-full ${isChecked ? 'bg-blue-600' : 'bg-gray-400'}`}
        >
      <div
        className={`absolute top-[2px] left-[2px] bg-white border-gray-300 rounded-full h-4 w-4 transition-all dark:border-gray-600 ${isChecked ? 'translate-x-full' : ''}`}
        style={{ transform: isChecked ? 'translateX(100%)' : 'translateX(0)' }}
      ></div>
    </div>
    );
}

export default ToggleSwitch