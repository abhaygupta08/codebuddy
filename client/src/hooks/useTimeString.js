const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
  year:  'numeric',
  month: 'short',
  day:   'numeric',
  hour : 'numeric',
  minutes : 'numeric',
  
});


export default function useTimeString (time) {
  try{
      return longEnUSFormatter.format(new Date(time));
  }
  catch(error){
      return time;
  }
  
}
