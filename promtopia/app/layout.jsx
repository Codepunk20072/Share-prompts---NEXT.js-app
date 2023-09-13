import '@styles/global.css';

export const metadata = {
    title:'Promtopia',
    description:'Discover & Share AI Prompts'
}
 const Rootlayout = ({children}) => {
  return (
   <html lang='en'>
   <body>
    <div className='main'>
        <div className='gradient'>
        </div>
        <div className='app'> {children}</div>
    </div>
   </body>
   </html>
  )
}

export default Rootlayout;

