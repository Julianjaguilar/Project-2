module.exports = {
   
  format_date: (date) => {
     
      // this Format date and time information to MM/DD/YYYY HH:mm
      const d = new Date(date);
      const formattedDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
      const hours = d.getHours().toString().padStart(2, '0');
      const minutes = d.getMinutes().toString().padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;
      
      return `${formattedDate} at ${formattedTime}`;
    },

  format_event_date: (date) => {
    const e = new Date (date);
    const formattedDate = `${e.getMonth() + 1}/${e.getDate()}/${e.getFullYear()}`;

    return `${formattedDate}`;

  }
  };