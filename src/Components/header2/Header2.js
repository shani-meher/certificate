import React,{useState} from 'react';
import './Header2.css';

function Header2() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
     console.log('Search term:', searchTerm);
    };
  
    return (
      <div className='main_header2'>
        <div className='component_header2'>
         <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB9CAMAAABTaScUAAAAY1BMVEX///8AAADx8fH8/Pz19fWjo6Pu7u6oqKjb29uHh4fX19d2dnbBwcGzs7O7u7vp6ekODg4UFBQgICCbm5sZGRlpaWlSUlLIyMhMTEw5OTmQkJAlJSVdXV0zMzNFRUXR0dF+fn4hovx0AAAE9UlEQVRogcVb24LiIAztXVrbYqtVe/f/v3J1Zt1xTQLhUuc8g6cEOElIDAIuMlGnQ7eMTRiGh7af8mNVSPZsF8SyvPWnEKKZ97WItyWXu2lEqJ9oz4Pc7AviulNQPzFVyRbk0fHAIP9C7v0cyJzL/YW98EkeHVU7jqHxaIGyNyR/4FT5OYTR3oL8gcnHDtSNJfsdqSt5fLMnv6OLnNizsxN7GC4uG1DMjuz3E1has1/YQqPCzpK99kEe2h7A0hO7Hf+F9cu87TG3f6G57n031OVaFMV6KY/7RcNfG7JnqjPf3OrsfXw5KN1CYcQeK+57dyHEfL3RW9EY6Q+pdYdcpSPy2JIfbeCAyEOv9eMypyxwZLNnWCh5x3xhTBbUvq1ceiKky5nTU3z6wowBcbU78MVb4JeAZ/4IjW1GE9cl0Q1oWPHXEZvam4Vu0YT9SMeYiZ67+V1mdMCFg2FBLKI2Zr/jivzOpJ2VWX41QIKdP+3lw3beLmBZEae118yJkZ2/WbHj919zgpE731uyo/I1KCfEyAy2WAJIqP+9UvqkP9M/gJhf6TZ2YPjBJVVETtJNNR6KFdfP4IDLaRV+X8K76pYlBdD6iqMEwwzdRdVhAL+o8HtQcDkBhgoCaM+ZHgxdrSN7EEDXQw6Fzu7mTA/vHhlzF2CofXr6hAC/SaYcQHFb9/ehBCRApO4CQ12d2YMAvAyRlwncEtdr9wDw4BMlPMDfOD8NBYiWjJTXAdtk7+x+AL0YJaRAcs3yUhwRmx64Zx/vgnz693EHH/QJWBSXnpeW6OiBlFJR+y+v/pf3HjxNfPbkA3/72XsPIr1NVK+lVA8EO5to/pnSfODxFIERG+CRjFxT9T5ytEis35CARJsM3WG04xppYtFORQ2VICxVZ4QcAIsqrhO4ea0zPcyb6DQHlsxchUcCKVPk6zC7d0vxsDhbsZ/wW0PHcjTM8BWnGXkOcxM+aM6TKmeFD0ujU4oLszbl2xq8pU53D3kpUpZVsMdIe6cfwecCzQMlVAkH4UdqIpqblMAZ1qcPe5jXmRJ70rUzP/JSQydY/yYh9K2V48Nqe/qEHetVuFqID1aRYWTMAitFaY0GgHa6cPw3WsPrzNYfo+ys5wJE+O84m6hfgneb8AJnvBA2889/hlUyeKWcgC7gcsvgJVGF5P4Aovzfn88xQKbodSHDvP9B1CHDU6o9gZWyw4nJj5bhHuh3yitY6hptePwR3T1wGqisP0sZvV28/S9UTRnntAA2EBWnl5DNr+lbWbq0XGX2gCzKqlv4nV08+yOe/x3tPPfzPJo2F/H40VKyF/w2Py+AgYUgX+CdP19dWxA8+69eetbs+WE1wBeY/mezA8gMoAtbA+haHZnrj8lOJCX2UndzmP4vEEw9f8HyiKx88QcF6YJx8r8BvU65+X2ERcfeguknm9Ct36CPUeScXu15v756Y2/2vyMp92RD3heaqXpPyHT8Zn2U8WWgAqprXmKhoM/1f3+C2A3dtX8a4jQvU56uZBDocf9fviHJpBCFEFImsToF3ITfAN7t75nftI/XFDr92Xr9/vTPDr9tfw3/uDG9jn9revX+L5vTK9fvo2Zoz9+4F81c+D+xeJqf+ezkDvT8kYVV/0DWb/No64//o+yAf3HsiDTGf/vP/dvANvznz7O/2N/wqdwXvh9OTx9SG4h6DK+7V6X9A/E7O57v+iWCAAAAAElFTkSuQmCC'></img>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        </div>
        </div>
    );
  };
  
export default Header2