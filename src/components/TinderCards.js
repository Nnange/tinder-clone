import { SwipeableDrawer } from '@material-ui/core'
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import "../CSS/TinderCards.css"

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: 'Awong Nnange',
            url: 'data:image/jpeg;base64,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'
        },
        {
            name: 'SKOLOSH',
            url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhAQEBAVEBAVEBIbEBMVGBYQEBASGxcWIiAXGRkeIDQgGCAxIBoZJDIhMSkuLy8vGCs1ODMtNzQtMC0BCgoKDg0OFRAQGC0dFx0rKy0tLS0rLS0rKy0rLS0tNy0tLS0uKysrLS0tKysrLS0tKy0tLS0tLTctLSstLTcrLf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAEAgMFBgABBwj/xABGEAACAQIDBAcFBQUFBwUAAAABAgADEQQhMQUSQVEGEyJhcYGRBzJCobFScsHh8BQjYqLRM4KSwvEVFjRDY7LiJERkc9L/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAJxEAAgICAgEEAgIDAAAAAAAAAAECEQMhEjFBBBMiUWFxBSMyQpH/2gAMAwEAAhEDEQA/AOwbTrAU24stmUDMsVIIFuOkeNQtmA3oV+sICgaC0VIPG2qkx+VeBgU28PnaKFHmfwjt5l5liggcmNGgvEX8c4HtKnY0aqj3Kqg2+y/YP/cD/dkhGMZR30dL23lIB5ZawySrSMnsIvNbw0jGFrbyK9syoJHI8RHWawueGph5MFG2PLOJNTnKz0r6bYbBgqT1lbdJVB523jwnG+kHT7FV2JeoUAJCop3AO4wfKT0Mo/Z3LaXSTC0XWm9ZQT7wuOz48o/T6QYQi64mk2mjqZ5cxG1Hc3v2r9o6n8/yiP8AaFyO158I3ttdML4nrHA46nVXfpurrzU3EIvPLmw+mmLwpPU1ioI7S+8nHgZ1/wBn/tFTFFMPiN1MQVNmvZXtprxtnaI1JG42rRe6ZtWYcHQEeKmx+RWEs1oLicmpP/FY+DD+u7Ha9cLbS8ClS2CraHGcc7TAe/8AGCftLcbX5cB5xqribZs6qP8ACPrEeYZY2SDH9CNvVUc/naRNXFrYuN5gBfeVSVt961vnC6WGqHgF8Tc+g/rBzlLpDe2l2x9sT9m3qIlWJzLW7gYtcFzYn5COLhUGdrnv7X1h9vI+2LcV0VLpMabVk3Wu5Qgi97bpuD3atNYdggAt+Z75YdtoOrvugkEa8BKwtW5v+jOTNDjI9X0sueKvCCSlxnfx75kQrHmTn6zJHXkttFzJmriKvEnunsM8AyZeaLgam0T1g4G55DOJf5CKYRCoFyE01W3D5iNjGJcC4JPLtAecRyiFRYnAmxq0/svcfdfP673pK57R9vnCYfeUgO5IS9rHI3y421libKqrcHQqfEZj5F5xD2y7XNXGGiH3qdJAAAcg5veGO9DLuyibQx7OxLm5LanPjIqrUz5njCsPg6tUgU0ZiTYZXl52D7J8RU3Wr1FpqdRq35S9pG4Sbs5s7ny/XpNA909C4P2a7PpWLA1GtxyENTohs5bWoLlpebkN7aPN9NyPDv8AKGYXGFCGRyGBuCDa39J6GxHR3AW/4enpxEoO3OiOCLNuJ1fLdOQiSypdjxxN9M6R0F6QHH4NWA/eoAtUXHZqCxB8DrLQ2FckksF8Bczh3RGpV2TjKb75fCVgq1iR7q52byM7wtYEAg5EZHgR4yVQ/Ys1KLGlwC/EzN57o+Vo7Tw1Nc1RQedhf1i8/wBZzW9wtGTiukSbb8jGPQOrUz7rKQe++UzZdYvSpMfe3BvfeGR+d5lSqC26ASRryHnB9jP/AG1P7NZiveHAe/qzDyixk+QzXxJIseU01/DnM3Zonzhk2ICbXQmjVAzO4SPLOVBba8Jeb34ZSj4lOrLIct02z5CcvqF0z0/4+X+UR6nXUeHrNwEOTl+jMnLyPReOPkvrso1zPLX5RpsSeFM/SKVW4L5mb6hjxA/mno/2PpHz3xXY0GfMk2N8hqAIxVZ+LgDjbKKxlC24d9iN9Q4Fl7Jy5eEKp4SkPhBPM9o+pgWOTdNjc0tkUWpnQb/3QX+l7R+lRqHSnu5amwH9flJXKIeqBrlD7MV2ze630gX9kaw3mtYgi3A+M817XonE46soPvYipbO913jaemmrgg5j6Tg2xsCorVahFqhrva/DtmUi0uhoJy7LXsDZtHDKERRcak+8fOT9Ta6oLXz4SJrrnccoBUwzVDqQJlJl2k2SVXbxY2Bg77Va1wbwRsMtME39ZFPjADlElOh1Cw7G7UrtkvHllAStS3avfjeG0ceMtB5+MYxm28ClxUrDe4ARb5BfxHsfutht1rHKXb2cbSNXBU1Y3NJmpknWy23f5Ss5m2PpVKZak4db+Y01lp9k+JCNjqBNrNSdON94NfLyEEX4EyxTjZ0rTwi1MDOM71+eUbONOqhjnkbhRC2kcvBsNqZDIZk5wOgd3EEfbo/NG/8AP5Rg4hzyUX53a0Q1f95RYXJV7GwJ7LKQfw9IvLaH4NJkvXdRbeNrA8/WMmsupYgHQcT5Rg0ajkkggHQE2AHDKOps86s3pn84Xyk9IVKKW2LXFcgfPWVDb9ziGXiVVgvPUE/yy6Lg1Gtz5yD6QKgKOFAsStwBc+flEy43x2y/pciWRcUA4JAgu1t62ZHATUZ6w8cs/ETJy/o9GWO3bL1eJZuUwmJYz1ZTPASGK1PeVlOhBBPjE4SrvU1ZtbdruYZH5gx2o0EwbgPVp94cD+Ftf5gfWc/kpWh8ENndhMDjx5zKtUDKx8heM1a6aXIPpeEZKx1hxE4xj/3eNxNM6de5HgST+M7Ar8mJ8t4Tl3tHwu5jaVcW3ayre321yP8ALuzItj0wpapawU9njK1trpfiKbPToUQ6g2D5nOPY/EMiFFyJOvdBK+16CUrs60VFxfd62vWbjuLoB/EYYMq1qyu/74YssRVQWJPCxEJG1t4aSLxtbrlerTWqUVrMzKhAyvnu6Se6H7F6wgNncXB7vwgyQspinSIXa+06hG6pI+U10e2XTdt+qGqWPatuhR4s5Alu6UdEgrKwzW2dtRKNtDZ26gDbwcMc7Epu8rcIcdJULk27RPbUwtOnU/cb1LMZEqynuuhIl19mdW+Id7f+3YMNbbrrb6tOabOwQqNTWkrKFWzsNXPNuAly2Lj3wVQ1VG9ZGDKdGXj9PlFlVmpuJ2dMKzgGwA4Xt+cITZv2nPllIroltlMThaVek11II8CpIsZKmu50tDUfKOR87pMdXB0h8N/HOOrUUZC2XkBBVqE6jyMxap+wbeUPKhXB+QvruXyzmB/1peDg34ER1SeJm5MVxFk3le6Ti9FmXPddCbcBvC/yMnxxHdrBMXRVkNK3ZZDfwtb8YktopilxkmU+icpkbpNa+9wJ9RcGZOLo+gq9nRCw5iaa0BfFclHiNfmIFVqknUj+6hndLKj52OJslKtamMt5b+IkTtKuKdXDVCbKWZG8Gtb+YCKp4RjmEYnmch6aRrH7Dq1kCM4QB0YfEV3SDl9Iu5eB6jHthuMx26bLYm2YzPgO6AnGtxsW4/ZXw5ySGy1vdmLEnPgI6uFprog88/rG4SZlOK6IUO7cWbwGX5SG6bbGarhmY2R6Z3qZYgXYDNR4i8uhqgZ8BOW+23HVxTwgosURqxV2GRuQLeHGFR2MpNsijhhVIBNrqCPT5SC2v0dekWqkGtvru7u7fdGeXdDNjbQBWmwYvundYnIm3Ey64DEI4AIBmjXRd6OWbE2TimPVU0NGkWudbsZ0vo1s5KdkXtNex+Ud2vjUpIQgG9a15UP97zg6BG6eudmO/qQDC3/0KVr6OnbewCsgIZQ6jjx7pSsX1dJwmIpdhvdcZiUHFdNa9Ue8xa2fO+ckejFbF4pgKv8AYgZX4mLUruhvglXKzoVKlhkpk0lUG2VhnKVjKl3YHvh+MqNQutzYjLOV/wDarknjeCfaDBUmdO9kOHNLBBScnqVHXuXfK/5R6y8F+491s5WehlhhMEf+kAf7wv8AUSx1Cq58TpbUwnLLsc6wWuTlzmLVFsr9xsYCcQPeIJJ9xefeYlq9Q/EF7gLxbBxsk+sCjNgeV7AzDigNQB3ki0hWxKKbvU3m0zP0ELp4FmzFPdH8XZ+Wo9JlJvozhFdsKOOyyLHLgLfWaFZja4sLcTcxxdnH4n8gI+mBpjUb3ibw8JPsTlBdFL2phCKrEC4LXHde1/nebk50gChlIGq8O4/nMnLkx/JnsenyOWNOiZGCTlfzjq01GgA8BBtnE9Wqk3ZbqTzKm1/O1/OOnPRjPQ5JLSPBdvtjjVAPzyjfXjmLeMSQOOcQ9MchEc2xlFGnrNyIHArnG94aklou44G3dGTSGt4tsokhL1QcuA5cJC9LNjrjMNUoZb2TUmIsVqLmD+ucmioPdEdTz8uUOx+jgK4N8OTvDcHWWdGyKtzHMSbwO0DTOpnQukfR6jiEYPvU7++UsC65XvcGcs2ph2w9SpQc3ZDYH7ScDA/svGSemSGLxxqMBfImFYnDUCtmAdytgGtuIBe7d3GVvD18w3I/1gj0qtaoR14o0yLObFja405xomloNqU8BSJNi5tnYhR6Rt+klBLGkNw/wn/Lxklg8JsKioNZ3xFTiXNlOvARG1OlWzQBTwmDpX+1uC8cZRI19uftCkkcbfmJGu+7xhOPxe8qmwVv4RugRnY+DOIr0aP26iLfkCYjV7FVo7V0QUjA4VQpYimjC2eeR8pPthqrm5G6DzPDlCsPuU1SmgsqqAoA0Ai/2nlb6QNEG34GU2XxZzpwH4mE08BRGo3vvG4/pE7zcQbfrlrNhgciCJtCtN+RjaSKUamgCjd4ADtZ2h+Fr7yK44qpt4iA1mUkgXy17o5sVuwyH4Kjjyvdf5WECewSj8UGda3IfjFb/EzRPr4ZTRcAZzbJ1+CN6Q0d6mHtmp+R/QmQ3HgtScAZlTa41mSc42zu9NmcYULoi1RxwYBh4jI/5Y87gf6XjGKyNN+TgH7rZfUg+UVisTu2GV/wluVLZwJWzVWsn2t08TxjVzwf5b3raDti24gX4DgviYO1Rmy3ie5RkJPkXWMLq1F+Kx8Dun0glTEIPtHLQMLD5xP7DUb4bd5NvpMobPBLBntY8OP6/CbbD8V5B6uK+zkOXaH+sFerfVieQF/xk4uzKQ1G994xwdWum6PAQ8WHkvBE0VqEboQlTzy+srnTro0atEVxuirSXPjv0+IP18pdmrDl6mxjGJYFWUrcMCG45GGtAvZ54xVJ0JysPWD4eub/AFk9t7Cmm9RSLhWI+ucgAw1XXjDTL2gr/YYq9o2BMJodHUTO4uNJF1dtlMhBa+3HIPatG4yYXKH2HY5ACQDe0X0fxPV4ii4+Goh9CJXqeJYm5v3d8sPR3AvVqJTUXqOyhQOZtDwrQnOz0UKrHTMRW8TqJzrpD0vfZeOq0HpmvQqUqL0xvbrI27usQTwJQm3PPjHsD7WMCxHWU61I8SQrqPQ3+ULxtEFJHQQCOOUfQaSv7O6XYOsL0sTSYnRSSr/4TYyTGLvmASOBvuj0kmqG7DaiWFgNTnEbPFqtReDKreeYPyCwQ1WyzCju19eMew+/vqwQ5KwJ0Gdra94gT2aS+LJCtVVeZPIRhaljoC3E8F7ptMGxzYjXxzhCYNeJJhqT6J3FLsYLHi9te6ZDAirwA+syH2/ti8/pAFXD1XRl90MpHaPu9+UX+wsc3qZ8d0W+t4d1o5iIZzwseeecdwivyDnLxoZXAUx8N/vG8dDAZC34CI8Sw7oh3Glvzi68BpvsbxOJysvrygVMWYX4i34j/NDXPj36EQSuePLOBlYqjKjEWBbwvnaIJbi1/DKEME1OeWUHaonHS/H9ZzGGuqXgM+PP84DtvHjD4evXJtuU2I72tkPW0c2jtClRRqtWqEprqT9ANSZxvpx05qYxTRQCnh964Hx1LHIty8I+ODkwSdFwfo9Ux2Fo4/DEVTUpL1tM5OKigK27z7Sn85zfbWyKlJyHR6LjgQUPz1nTPYPtoGhisKx7VN+sQf8ATYAG3mP5pN7a6b0GYUBg+vLfDU3QvDuM6vZt6IS9VHGvmzz9i6JI3iQTI837p1PpPs7A1WK06C0atu31LkIp5WIIPkBKpieiNQIXSorEaoexUP3b5N4Xv3QvFOPYkfWYMj09kHs7Ds7BVBd2ICgZknuE6z0dfD7KTraymvjipsie5QH2S+m9ztppzuB0f2ZQwdAMHBxtUEO4z/Zqdh2E5sftCKesWU06dJ7D4ipCnXS8fHg/2kc/qfXqPwx7+2Q3tA26doLTxBprSakd0qMzuMfiPGxA/wAUpIW8uOBwBZnpMuT5EEfP1kUdl0zxKEG2WYhlGqZvS5vcTTZD03Zc+Em9nbdrpbq61RPBio+UFrbKqZWs4BztrxjRwzLmUYeWUWk+zrTa6L1s32hbRp2/eLUH8aIfmACfWWTA+1etl1uHpvzKs1P63nJaNUwtK0Htw+hr+ztND2p4c+/QqJzsVf8ApCqXtMwBZFbrVDNYuygInee1p/ScRXFczB8djQQo17axHiibX0eqrAzcrns52n+0bOwlQm7inuOeO9TJW/nu385k53ARllKiJsB3TV76ExD1bakecEmgpMx0BiLD9axmpWTkO7XP5QV8TrZd3wz/AKSfJItGDYY6DW+XpBXK37JB8DfnAmu2WbdwGf42jtLA1OC7neTnBdj1x7Y/TcBLn4bg+Wkhdtbep0KZqVmCoNAM3dvsqOMD6W9IqWDUqX66uRcUl0U59p24eE5BtzbFXEOalVt46KPhUcgOEvjwyn+hXNIzpd0lrYypduxTU/u6Q0UczzPfK5VGfdHKrG9ze3G0VhqBqsAna593jOzioqkQbsmvZ5tY4TGU8R/yvcxH/wBT2B8bZN/dnRRsi1WrVP2iE+7eUJcElNBT1B948zLdsDbAfCoGa7U+w9znddD5ixlsDpnl/wAnFuCaAcbsGmKjvTqPTLG5t2s8+d4FVVQVpB2rVTmt+Byzsuklq2ML9lNSDCehXRwriRiana3gwBPBsrEfSPkddHF6XE8sqkQu3Nm4pKfWdXvAHNQWGXlGMA+IA361TcA4A9m07R+wKRYi4lZ2p0PpuTu9mxuBqnpJxb7Z6Wb0Sr+souH2u1UhadMlr2FU6LrmOcreGfeuebt9TOr4To46sF3VtfO3KUPpDs0YfFVqYFlL7yjkGzt63mybSdm9HgljcrVEUodSCuY4qeI7uUMp7jhgLgsrKRoQbHIxNo7SOYJF85A7ipK40m+s743iEtUqLydgPWIYQmHWrwepVvb7wjFR4hWzHiJrGOs+xLpX1dWps+q1kqsz0DyqWzXzA/l75k5jsXaJw+IoYkZmlWRwNL7rA289PObnNPHb7GPV7Y0E237niqdsjxtea6qo2iMB/Ed0egz+Uk0RQLKABwAFhNtJ+0u5Owe5XSIqjhLsyuwFgCN0cDfn4QxMDTHw38c5qvk9Nud1Pnp8xbzg229rUcLTNSs5Vb5AZsx5KOMWMV9BcpS8hzuqi5soAzOgAnOumftDChqGCN2tZq2oX7nM98qnSrpfXxZK3NOhfs07+93v9o92kq1VjnOvHh8sXobxWIZiWYkkm5JzJP4wNxxjpN4286UqAN06Tud2mu8bEnkoGpJ4CT+zMAtNSci5tvG2vhyEhMBiurqBj7pycc0Nv9fKWlbZm9+/mLfOLIwFWBvN9H/+KFM+5WUqAdDUFyvrmPEiLqwKuCCrDIqwKnkwIIMVOmJkgpxcX0zomy+iRZxUN6aj4b9o/wBJcaGDC7pAsFtbyj3RjHU8ThaeIT4l7Y+xUGTD1h2KSyEc5TlbJ4sMcSpBK04Li6OYPOEUqtqQexchNB7zEcBF4pbqCIilsqBrRBHIzlXtOoWxNNz8VK3mrH/9TrlETnHtYw39g/JyPUf+Mfu0FFDppHCmkaDkCY2IyyNpEJXNpqBWq/ev6gGR1apJDbrWrP3hfoJD1GzmDQhzEKe0P1ziiY3vZ+RgMKtMjavfIzIOgM9rxFQnhr3xRmt4SLFQxiaRZCPitde5hmPmJw/2hbSqNjaod2NMMAiEkpTBVbELoO/xndQw0vnODe09Qm0MQPhIpk+aLGwVyHRBc4LXqCNHFXFuIHrAa9fjOywBG/nNOYElXWLFWazC2k3sTGFl6s+8vu96flIEvMw9cowccDmOY4iB7QC2WguLjqVgQCNCLiC4qprJjF49kO3hTrVMHUbsVc6fdUAzHmP+2dZxq5KOE8x4fEvTdKtM2dGDKeRFiJ6S6ObTTF4WjXXR0Fx9luI8jeFOtgkgzBglWByF8vCOUqAVAg0AsMgMvAZTdP3jwGiiPRW9iglIZSm+1PD3wjPxRlI9QPxl3C5nxkD06w2/hMQLXPUuR4gXlIv5BRxBM4NiKJmUqptHDUvxiDor3SFbVbX1RfxkOxktt/8AtR9xfqZEGABoxljnHSYOxzisA8wmTYIm4Ddnsl2PGyjne5iervwJ8dIWKYvoL8+MVOf2L7Zuf0DJQ8BnOH+2Wju45zf3qNIj5j8J3gmcU9uaj9poHicMPk7yuOEYvRk2zlT1T5xl6sVVOsFduPPWXAEU3jocwaiY6ZjDhaYr90bvMhToxL7KxmRpnhmv4iO16mshUcqQw1B9ZJVKu9ZhmLQdjxNb06b7F9vbtSpgXbJ+3R7n+JfMWPkZyvfhWAxr0atOvSNnpuGXxH6tMgs9XWGXdFyL2HtVMTh6eJpnsvTDAcjbMeRuPKSSm9jFaJM0wzg20MMHpsp0KkHwzhkbre6fAzJ7Rjy5VcqSDwYj0mzUy1mukY3MVik0tiKth3b7QAVjpwjyWyyQHtl/3ngo/GRxhG0mvUPgIKG5RRH2at+UGqHOFxGKwVQIlYqerdnVG4Fl3bj+YesUDG0FxNRtGtMgMj2xg3JRb5sBZvvDI/OPATJkWO0rFfZk4l7dW/8AV4cf/G/zvNzIYv5DROU16cFrIBle5mTJUAikeEfLzJkyMzW9NXmTITGzUtpH8HiLHdOQb5GamRWFMec5m8SrzJkTyOdY9iXSLOvs+ofeBehfn8Sf5vWdeqoTStxABFxv5jPTjpNTJR9CSClM2wymTIgh5d9oA3NoYxf+sT6gH8ZX1rzUyPJ7KgVf3mN8rxtWHDITJkApjGds9nnRZMdsCvQZVLviK74Zm/5dUKgBB4ZrY+JmpkRmZw3F4Z6bvTqKUdHZXU5FWBsQZkyZMCj/2Q=='
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);

    }

    const outOfFrame = (name) => {
        console.log(name+ "left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">

            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                        style={{backgroundImage: `url(${person.url})`}}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>

                </TinderCard>
            ))}
            </div>
            
            
        </div>
    )
}

export default TinderCards
