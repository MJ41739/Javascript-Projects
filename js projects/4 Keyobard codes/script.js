let press = document.getElementById('main')
window.addEventListener('keydown', (e)=>{

    // console.log(e)
    // console.log(e.key===' '?'Space':e.key)
    // console.log(e.keyCode)
    // console.log(e.code)
    console.log(press)
    press.innerHTML = `<div class='color'>
        <table>
      <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key=== " "?'Space':e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
    <key>`
})