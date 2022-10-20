import '../../css/today.css';
import gridItem from './grid_item';

function today() {
    const cookies = [
        "빼빼로",
        "이석준",
        "PS5"
    ]
    return (
        <div id='today'>
            <div id='today-title'>
                <h2>
                    ❤️이주의 과자❤️
                </h2>
            </div>
            <div id='today-grid'>
                {
                    cookies.map((cookie) => {
                        return (
                            gridItem(cookie)
                        )
                    })
                }
            </div>
        </div>
    )
}

export default today;