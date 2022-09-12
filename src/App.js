import React,{useState}from 'react';
import './App.css';

function App() {
    const [Value,setInitialValue]=useState(0);
    const handleClick=(e)=>{
        console.log(e.target.innerText);
        if(e.target.innerText==='Add to cart'){
            setInitialValue(Value + 1);
            e.target.innerText='Remove From Cart';
        }
        else{
            setInitialValue(Value - 1);
            e.target.innerText='Add to cart';
        }
    }
        
            
        
    
  
  return (
    <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">online apple store</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{Value}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Buy apple products Online</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Think different<span>&nbsp;<i class="fa fa-apple"></i>
</span></p>
                </div>
            </div>
        </header>
        
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80" alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">MacBook Air</h5>
                                 
                                    From$1199<br></br>
                                    Apple M1 chip 8-core cpu 2.8lb weight with touch ID
                                </div>
                            </div>
                            
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClick(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            
                            <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                            
                            <img class="card-img-top" src="https://i0.wp.com/nasilemaktech.com/wp-content/uploads/2022/02/M1-Pro-Apple-MacBook-Pro-14-00024.jpg?resize=450%2C300&ssl=1" />
                        
                            <div class="card-body p-4">
                                <div class="text-center">
                                  
                                    <h5 class="fw-bolder">MacBook pro 14</h5>
                                   
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                   
                                    <span class="text-muted text-decoration-line-through">$2300</span>
                                    $1999<br></br>
                                    Apple M1 pro chip 10-core cpu 3.5lb weight with touch ID

                                </div>
                            </div>
                            
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClick(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                         
                            <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                           
                            <img class="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFBUZGRgaFRwYGBocFRocHB4cGhgZGRocGhocIS4lHB4rHxwYJjgmKy8xNTU3GiQ7QDs0Py40NTEBDAwMEA8QHxISHTErJSw0NT42PzY2MTY/ODc/NzQ2MTQ2MTQ0OjQxNDQ3NTgxMTQxMTQ0NDQ0NDE0NDQ0PTE0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgMEBQYHAQj/xABJEAACAgAEAwQHBAYGBwkAAAABAgARAwQSIQUxQQYiUWEHEzJxgZGhQlKxwWKSwtHS8BcjQ3KCohQkM1SD4/EVU2Nkk5Sy0+H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIEAwUG/8QALBEBAAICAQMCBQIHAAAAAAAAAAECAxEhBBIxQWETIlFxkTKhFDOBscHw8f/aAAwDAQACEQMRAD8A7NERAREQERMdxriuHlcFsbGbSiC2NWedAADmSSBXnAyETmWJ6ZcoPZwcdv8ACg/F5A+mfK9MDG+SfxSdSOoxOTN6acDplsX9dBKL+mtOmUf44qj9mNDr8TjbemsdMm3/AK4/glFvTW3TJfPM/wDLjSNu1ROJn01v/uS/+4P8Ej/TVi9Mmnxxm/hjRt26Jw5vTTmOmVwvi7mUz6ac1/u+B88T98aS7rE4LiemfO/ZwcsPeuIf2xKP9MnEP+7yw/4eJ/8AZGh3+J8/N6YeIHplx7sJ/wA3kf6V+Jt7Pq/hgE/tGO2R9CRNA9F/bDGz6YyZhVGJhFDqVSupXDVakmmBU+Aojab/ACAiIgIiICIiAiIgIiICIiAiIgIiICad6U8ocThuYA5qgf8AUdXP0Bm4yx4xlRi4GJhnk+Gy/rKR+cDgnZPsbgZvLritiOGLMpVWQAaSfFSbrQfiZsA9GOW3/rMby76fX+rlH0R4hOHj4RG6YgYi/vLpP1w50lMM+XzH7purFJrE6YcmS1bTG2gL6Ncr/wCKffi/uQSovo6yf3H+OK35ATfGS5E4Q8D+rX5y2qfSFPi3+rSB6O8lXsMT/ff8mE9b0fZK/wDZ/wCfE/jm6er/AJsSLYY6keJ7wlo7Y9I/Y77z6y08dhcmP7EfEk/iTIt2Qyi/2K/FQfymfxeNZZW0nFX3iyPmAblyThsgxA2pTyK96/cOZ+A6GWi9I5mI/CdXnjlqmJ2XywrThJ53gq3y3FSLdncADbBQHxGGn4FTNnw0VwThkMAaJBB38DXIyliZU+75zRSaezlabR5218cIwx/Zr+qB+EqrlkVSoQAHn/15zJnAvaz8v3y0xcEjrO9e2XLvmFq67e7zPUkn6kypl0VmPrGYCiRpO92D16czIYi1y/E/ulvh5vDDlcRCyhe9ThDZ5AFip6je/dcZr0x03bhbHW+WdViZ+y49F+IF4lnMO/awEf8AUKqfq/1nWpxT0bOq8YxAvsvlcQKLBoetVgLBIJAXnc7ZPnsl+602+svXrXtiI+j2IiVSREQEREBERAREQEREBERAREQEhiDYycieUDinYr/V+MZzL3StrYfB1dP8jNOpuynmWPuucu46wy3aHL4pG2IFB8yyvl9/jU23J4vECW14uD3jsPVA6Njsh+XtXymjHE2jj0Y89axbczpsKsPusffLTN8Xw8NgrgK5FqpHePnVbdefgZZLlc4EoZkl9erVpSwB08GHkRW/urDP2czI1EthuzKFYsjsWFUSzMSSxAA8PKdO2fb8udYp6z+zLntZlhhri6wFbkNPe2NewLNefKQTtLlcymnEdVGoAqzMpsg0aFErV7nYdZp3HeC55hTBWGu0UEjStUFAI6CecK7GZhhbnQCdwCu+++5qT8K2tzr8r7xR4mWb4o/D8EB8PCXEYMCyrq5XudTbEir68viMc/acu7A4OlFBKlBqZUUkDYkDmRZ3qzQ2mRxeybLVYnsgjmtm/vAXq8JgOJouXZQxe+/qPqlcNqNm7YWflUicd7R9Y+7rjyY4niZ2u+z/ABGsc6PYckMAwobkp4Weg5e1Nweit6gp/SI3/VuvjOXYmZR+5hDEJJFk4aoL5A7OxOxPznR8hkP9XGHiYrEshUsWGoWK5+V9Z1x91a7lw6jtm24lgOP8eRXw1R7RLLkEWzWVbbrVEAe6ZNgKGli9i706fluZpOd7J44cL63Wvs6gFBq7m/4aKiIS2ylEJBslmIUAkHYnf5Gdcc2xRNr+FcsVyTFaeWD4njlFsLzNA9Lq/Hf8L+U1/Vatr87Jr4A/Cbt2nyWoGmABI0MzkKg076VPMEUbFWSOdVNHxUw1P2sTba7VBXLYbtX+Ee8TzeozTltzPHo9jpMNcVfljn191bsV3OL5Qg7Ph4qn3eqdh7twJ3mfPPBM0F4nkWJ39eEP/EGgD61U+hpyjw55I1aXsRElQiIgIiICIiAiIgIiICIiAiIgIiIHGfTXgNhYmVzC80dhfmCrp9VabrgZl8QBiwIIBHMbHccpifTRkdeQZ63w8RH+ug/R5b9ks5ryeXYsT/VKp67p3DfxUzV03MzDF1kfLEtlUEeHzlZVsXZ+ssAwk/XV1+s0zSZYYlc4h8/rIYOOAd1v4XLJ8QHlJ4AF9669/wC+W7OOTbJ6lYEVXuFTDcV4Rh4ntOo99s36o3l+2Mq+yK87JP8A+SwzLNd2bkYq2ieJ0vtjMvwnAQkjEJKgse4qChzPecE/ASovG0VQVtgz6F1YS7tROkFhudpfZfPOraioY8rI3rwuYrPOi4hxXRQujUqggbrYIo7AN3VsAkANy5ivUXyUjc6mGrp8dMltc7e4udVkXEdtALH2cNPsmiFphb+VUOpmH4n2qdl0YZZF1g6zWpnU902vs9Nh9etI4XrEDV3g/eGgr3WrSEolduWmxQ3o3J5nhhw8MYmINLKxvDKKzMLGlcNRqCnxJ3HPznn3zXvGpnh61Omx05rHP5WvaDMF3Uu7GlCjU5I1EBiVHnZvfoecxzAE6ltumxoS4z+Zd2QvhgChYLXpoVQPU3ZoSi+OTaoKAFX18NvCZrTueHpYqREc8f05WjdzMZRzQ05zBPyxL/KfRc+ZuNalTWDujq426huvhv0n0uhsWOu8608PO6v+ZvSpERLMxERAREQEREBERAREQEREBERAREQNf7a5H12SzCDm2C4HvCkr9QJy/wBGeYL5Qr9zFZfgwVvxLfKdpzS2hB8JwbsGPVZnOZcmtLmh/cdkJ+qzT0s6yR7s/VRvFPs6MtjrPHI/kynhmuUi5M9PXLyYT9Z5V5wh3Fmgb36bc/xA8798jgkDdrIHQdT93fxllhNiYlsFpwO7zKqAd9TE8/Z33I8Ku8vUZ/h8V8t3TdL8T5reGRxMVlAJAC3sO9qN2NzyFbWPMbGWuNlXS3Z3QaNegIHqiBbErQbdbXzllneIPhpRbViAkArYr9H9LZqoddr2E9bj+YKgu4Bq+6oBA2oXVkdPjv0nmWzzE7mZ29rD0nfGqxGoSyWcZx6w4ThFXUHdNKuFAJsWaBG+2rw3O01viOctg+K4bSuobE8zZVflRYAA1tM0eJ4h1F2Viy6bZVLafANWqhsdjzrrzpHMJpH9SmsEd7mO7RBZTeprHUkb3Urk6qcn6p8O+LoPhfpjlZ8FYM+tiwRaxK7tsQRsBVAHbbnsu+0hnM0xOonU1VtZAHRRfMX1kM3jb7IATdkDck77k/l/1xzYl8jZPlZvymeZm3DdTHGKNz5/sY2Idy7V5Dp+6WuCztiWDS0L2o1z59DL0cKdx/s3KhhZ0EAnp3jQ398ymHwHH7toFDbrbDcDwC30loifERtztM+ZnUQ1ztBg3l38aBHjswJ/Cd94Hj68vgv97Bw2/WRT+c412s4O+DlyXK97DYjSSa0dDsPP5TqfYLF1cPyh/wDLYa/qqF/KdccTEalh67tm0TWd8NjiInRiIiICIiAiIgIiICIiAiIgIiICIiBTcWCPKcKzOH6jjuKtUMZSR/iQOf8AOpneJxH0q4XqOJZTHG10pPkmJZ/yvUvjt22ifdTJXurMezaBiHwnnEOGvi5hkwXYqukuofuoQQKOnm53NeXPnV1wzIDFanLqSfsjdbDaWa1NAlTR2G0yTYeWyWEVGJhYZBBPrsYLe5IJ3vxM2dXeJmIqz9HTtrMzHP2YvHTDwSS7uzIF7oZGYb2uo6gFYkG9zttZvfHvmsV0xHwg5GsIN0d1HX1aoPukix98eG3ub7V8JwzpGLhnvFmKLitqJ2ssic9h9reh0ljnPSllEUpg4ePiGquhhryI2OrVfnUxTG43vltpfnWuElyuPiNrOE/LSoKaKs3QVjd3f4ecr5fs9j4jVaKTyBY7V+iBz28Zq2b9K2YY3h4CIbJGp2cC+ew0iYXM9us9iMSMZUJ56MNbPxa2mecUzO5/2G6nWdte3iPt/l0Pi/AHwcMYjMXtiNKKxOwP3QxO4qtJ3IlLHy2Xw79a5FbW+IiC7Pmu1Vy+9Oa/6Rmcazi42YYHpqaj4iiygSWHwEsO7hH+8xuvgqkfWdKY61nxE/dH8daN/wDG+nj3C8K9Whm2CgF8blVksARvvt9ZZ5jtzgam9Tg4umqAVVwxuK2bVy/wzURw1E2fHw08tS38gSfpJI2WG3rHc+CqR8i5S/hLRWItMxwyzltMann7y2HMdvsy6FEwEQE33sVmN7b2oBHIdZjz2jzrAAYyoFFf1eECaqvaa2/OWa5vBVgFwb2vUzjwv2dN3496P+1m090IjcxSau7y+3q3uTpE5bz6qjYGLj16zExnvo2IQN/0RVe6p2H0f5pEy2FlrrEQMNJvcambuk86BHPfYzjT8Sdh7bgVTAOVHSjQ2Fnfl5dd8rwPiRQqrOQQQUYkgqeY73KvDe/hyaUmZnmZfQUTXezfHhjjQ+2Ko36BgPtDz8R+XLYpCCIiAiIgIiICIiAiIgIiICIiAiIgJyj02cPOJl8N1BPq8bvULIV1K/8AyCD4zqxmqds0L5XFA50CfcrKxHyBgcDx8fPYxLPi4zahR1YpUEbbabG2w2rpLdOBYhoAKT7yfymwcSxXw01LQ3FkqpNcqGpWANkb10mGOfxW1q2M9MhZQrUO73qFEdAw5SdCY7OOot3VB+lS/VyJIcNyye1j6vJdTfVFr/NLDBIZgAoJYNW4vVuBenfnp5+Mnhg90sKBJVtSgab5MC2553tv3fOSMi/+jYdVgu5oMPZ5Hkd2cj4gHyng4wwHcwMNABZ1OWIF1yBXqR0Mx6bAMzWFtHokkh7I2IA5at7PJfCTZdC2wJOHaG6AKtdiwTYBatjtrHjAvcTi2LRIfTsGpERdjW4IUHqObdZa5l2f2mfEI0tuxa1I2YBrPMj5++EQkHQNWk6VPepkaxSh9l3J2r7Z8JJFOwtVp6AY2pBPJ9AravLmfAQKTp1IApqJ5alPJkDkefh085ILXtMPZpgLoAgaXGnYc15c/O5UwlAqyQQxS+6tWDsQbNA3vW1nynuEgNIUsra76iym9i1d0jUSOXj5QIGhepvtC9wDq3IdRRocrIPXzEuUwyCAV07nmCEVr3rUSpBFXt1HMDcobke6AArHUuzDVpoJvp57b9T4SWGABZ5hr7urY0uk2eho8h+CwKmGvQCu7YApr+97Iqu6T5VJULNdDYPSuQ2PtdPOufLaANjkTZtrJsMb5aapTt48vdd0MpisupcNgosnu6aoAkgtRI2v+d4GV4HxNwyqxKuDeG/LzAv8D8PCdd7N8eGYXS9LiqO8OWofeX8x0nCspltbgF1F7gmyNuh5V8T+U2jIcQVCgTH1YoPccAi66BtwSBtuTfW7gdsiYLs7xxcwuk0uIo7y9CPvL5eXT5GZ2QEREBERAREQEREBERAREQEREDyYTieBrR0P2lZfmCJnJj8xh84HDOIZfUjqRex28+n1mnIGFMgFkXajVXMUbujXTwM6XxnLaMbET9Nq9xNj6ETn+fwqdlY94O1EsCNJOpdlBa9+vl8LCjhIzLoLqDrXSC2x1AgghboWF51zM9UAhywIGpb0KQFbvVWo3y17ETzDwVKsdRtQDQFbEhbDE9CR06y5KI7k6BbqWTdvbNmgLo2QV5dRAo4zgNiam1MSB32Zi/eFEFarYLz6GhKpwmUtoUrYDIRpQaPbIYmi1Dz5rcq5Z3LLswGkhzQRdGnSSDt7Kb/CU8utMo14YKsTq335HvE0pXbx6kdagevh629pe/R9liddWUUkVuxrY9VnoKsbJID0G74ALgbM6DcLqN8+rUZHMKqmk1lNnS2oUwB5DqOVg/ZkXxdTE0oJJNBep8Lsj4QK6NbDUosko49XekgABtRJs3ueXI+NxrN07bbq5169QsUQBYBWgR40JUw+G4+Ib0Ob6ua+rmZPLdlcQ+2yr4gAk/WoGITEAIvvKF00FVLHvF2b3s72BLjSo9kgbEEuQbBNrpH2tq+zsQfCbLl+y2EvtlmPmaHyWplcvw/DQAKgFctuW97GBp+FlXf2FbST9hdA1ADlq00vW6O4PvOZOUzTgasXQKogHcV1tKskc9+ZM2AKPAfKU2FbfL90IYROz6c3d25EgHSLHUVuOZ69ZeYeQwkNqig87oX8PCXrSm0hJg47IwZWKspsEfz9J0Xs/wAbXMJRpcRR31/Nf0fw+RPNzJZfHbDZWRirKbBH87jygdhiYXgHGkzC9A6jvp+0vip+nL35qQEREBERAREQEREBERAREQEt8QbmXEgwgcx7X5bTmSfvIrfK1/ZE5zx/LquIf0wD7FkafA2KsAXseU6925y2+G/myn6EfgZouf4WcRlZcRkKhhajemABHyAlhqGCqhWKDU1Kp1HansEACuTaBZ8ZLLKRaA4YZlYdxhqutSksuwFqF58mM2rK9n8FL2L2NJ1HYiwaobcwPlMlgZZE2RFX3KBA03I8NxTp04eIe8GbWVRPBhRstaki7F3y2mRy3ZpxsXRRexCBnrxJawD/AHZtAEmBCGGwuzuGQNduRe7Hc6iWN1XUnbfmZk8vw/DT2EA9wA/DnLlB+/8An+esnUCCqByEkBPanoEDyokqnkCM8ZbFSU8gW58DzkCJcYi3y5/ztKJhKmZAiVCJ4RCEspmXw3V0amU7H8QR1B8J0ngfGVzK2NmFB18D4jxU9DObJgMdgP593ObT2U4RiI/rGBA0lR0u65+W34SJS3eJEct5KQEREBERAREQEREBERASLSUi0DW+2WDqwCfusrfXT+1NEAnTON4OvBdfFGr31t9anNBLQAkhPBJQh6JMSAkhAlfWVLlMT1D9IE57cjECVzyeXKb46jmf5/GBVkSZDBL4hrDRm9wmayHZfMPviaU362TXujYwxb4wmCzHujn0G/4fCbxley+EvtlnPyHyEzGXyiIKRQvuEjY0TKdmsZ9yukeLbfSZzJ9kkXd2JPguw+fObPEhKyyvDcLD9hFHnVmXsRAREQEREBERAREQEREBERATwz2IFrmBtOXZnD0O6fddl+RInVHGxnOO0OFpzD+dMPiBf1uSMaJISIkpIlPRIz24QnAMnlss7mkRm9wmcyfZPFbfEZUHgNzG0sCXlXL5d8Q0iM/90bfObvk+zOAm5UufFjf0mZw8MKKAAHgBQkbGj5fsliuO+wwwedG2+m0zWQ7JZfD3Klz4sfymwxIFLBwlUUoAHgBUqxEBERAREQEREBERAREQEREBERAREQEREBERApsJo/a/LHWrgc10n4Gx+J+U3siWmayCYgpxqHgagcsJAlfLZZ3NIjMfdOiYfAcuvLBX5X+MyGHhBRSgAeAFQNHyXZLGffEYIPDmZn8l2YwE3Klz4ty+UzsQKeHhhRSgAeAFSpEQEREBERAREQEREBERA8i5bZ0n1bEXYUna72F7VvfumJbFx11MGw2Xf1dt3WXYqSxo6jZXmw7uq+9pWJnS0V2z8TDHEzRBKqnlY595eXf5aSxBNGxuB1DFzd7olX056bN/a9qtNDlzsiNp7PeGZiYrBxczR1It1tpO11tdtsLu6vpzs1P1uPbdxeujvCj3RpvcEC9QJq+W3OSpPE6ZOJTwroWN6398QKkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBKS4ChiQqgnmQos+89YiBViIgIiICIiB//Z"/>
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                   
                                    <h5 class="fw-bolder">MacBook pro 13</h5>
                                    
                                    <span class="text-muted text-decoration-line-through">$1500</span>
                                    $1299.00<br></br>
                                    Apple M2 chip 10-core cpu 3.2lb weight with touch ID

                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClick(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            
                            <img class="card-img-top" src="data:image/jpeg;base64,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" alt="..." />
                        
                            <div class="card-body p-4">
                                <div class="text-center">
                                
                                    <h5 class="fw-bolder">iPad Pro</h5>
                                   
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    
                                    $799.00<br></br>
                                    11-inch liqid retina display 128GB
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClick(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                          
                            <img class="card-img-top" src="https://cdn.ytechb.com/wp-content/uploads/2022/09/iPhone-14-wallpapers.webp" alt="..." />
                          
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">iPhone 14 pro</h5>
                                    
                                    <span class="text-muted text-decoration-line-through">$1599</span>
                                    $1399.00<br></br>
                                    128GB 6.1 inch super retina display with faceID and superfast 5G
                                </div>
                            </div>
                            
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClick(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-16456,msid-94154081/apple-unveils-the-iphone-14-pro-and-iphone-14-pro-max-its-most-powerful-phones-yet.jpg" alt="..." />
                         
                            <div class="card-body p-4">
                                <div class="text-center">
                                 
                                    <h5 class="fw-bolder">iPhone 14 pro max</h5>
                                 
                                    $1549.00<br></br>
                                    128GB 6.7 inch super retina HDR display with faceID and superfast 5G

                                </div>
                            </div>
                          
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClick(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                          
                            <img class="card-img-top" src="data:image/jpeg;base64,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" />
                          
                            <div class="card-body p-4">
                                <div class="text-center">
                                   
                                    <h5 class="fw-bolder">iPhone 13</h5>
                                  
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                  
                                    <span class="text-muted text-decoration-line-through">$1099.00</span>
                                    $849.00<br></br>
                                    5.4 super retina display with Emergency SOS upto 19hrs video playback
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClick(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            
                            <img class="card-img-top" src="data:image/jpeg;base64,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" alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                  
                                    <h5 class="fw-bolder">iPhone SE</h5>
                                   
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                   
                                    $579<br></br>
                                    4.7 HD display with Emergency SOS upto 15hrs video playback
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onClick={(e)=>handleClick(e)} class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
       
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
   
       

    </div>
  );
}

export default App;
