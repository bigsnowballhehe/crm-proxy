// typescript

import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()
const Cookie = 'ReqClientId=ede0437a-93dd-47e7-99c3-24f0c1f49f5a; orgId=8504be1f-dc62-4f8c-aed5-7c713d7384bb; PreferredOrigin=OriginServer; UnifiedClientVersion=1.4.3726-2112.3; sessionNavTourCookie_365804af-cb59-ed11-9561-002248593148=true; visid_incap_2029367=VbQV35jMSde4EoBYDG7i/KcziGQAAAAAQUIPAAAAAAB1QKQgXUEdNHya2QHGk3Q4; nlbi_2029367=2o5/AHSSWjjVAemyeEPzrwAAAACym/fSVJ9fvR2qFDShjTCU; incap_ses_460_2029367=ho8FXyjqJGOFoVPsf0BiBqcziGQAAAAARpXm13RWknthb4KxNtcS6Q==; ARRAffinity=6a8f7cd71f11c2b510d8550123c171c66ae60d2845592c7c2250ea645dabc54a15134d20c556b0b34b9b6ae43ec3f5dcdad61788de889ffc592af7aca85fc1c508DB71B9596406081257871449; CrmOwinAuth=MAAAAE_iEV0kwhHupmsADTqBl9aojoX2BX89x7py4qH2B_jaUkatBSMqM4OFr0VrPfcMUh-LCAAAAAAABAC1WFmv47YVvjf3YjJZWhQIkIcCAe7DTF6msrUvgw5S2ZY3eZMXeXkxKJFarIWSqM3-Z_0p_Sd9rJyZSZNBULTjW8ImCErn48fDw8OPeri7u_vjvPLjLsaBj9Qi9-7v7u-emu4HUMBX9PsiUdf6fWV_bH0s93fvvDxPyNt2m-Sk1YBBXJFWjPI2FETJlm2egrwtUDywISUjyFCQURTBlhjacYT2_d2DT8itGLdzAPnXjChLjMTwovI4Xs1nN2PGlvPsmKhOPmAK3DNhvr3aX81tD0WAtCLfzjDBTt6ycdS2Q-BHpA2a2IgjlHsYkgw5KEOxjchDUsHbnT_9jwQq0mZpWm7TYtuHKM79_PxrUtceG-Q-jv2Y5CD-ZRklVnwW97ywjx4g3vczrCczUaXAiiPmMD33XPYQq7fP_gvb_ud9N-rkpaOmhjS0BX4_Mg0Yti1sgF3oaSxe1e6i3DmMoCrjHtib7Hw13AHmDcwu3Rn3ZiFPsCW-CYJlecrP8eQSBcM6Wgw7qnrK5ym9GtDsLJNX-mRl2WqYLqtVfDZ7KVo4K_10mFRrxVFXWjT2rO24tFghhENY2lF-mUSz0lriVdfrLjkRG-P9MDaEUIUDRl7RQXfkjXStZy873vKALDgJBjSa-7NwU6lnNeiv52q_2zUCFZEDRkxprTQ87ho9UWY0Guf56Hb3vfskeOooJBgkLZy5H0JHaDe_T0OHFFkMIvTFtridwk-fR8H1SxRfSTyqIYhvp_HCTwCE2beC3BKZFsvILVa6HfXxyvDLK8On5_DVp8v1273-qYuwdUJ2_r7X8VH2ynF4kW8K5UDQjCJzDKXYjkhZkGMt1lI4RxSfYc5J4cM_MTTNNWvHKJrS6dMM8wxbPfNEuqXuRmo99WLG3m0um3ROw8FhN9QWimGrH0v1S6tzVnW6dfvY3xLfbVLkscmROfrGj4MYV3GcV8EzQz8GEfFvx-x93p66Buu_w-XNfJSbMwhm2z49LpQOFjJhJqNj430tE8BmU1E5OQj8UVvj2ykL_1No5yhuDisfvvpv0G8nd3_3Z9Ds4VZV_M0CkYVxY1vhLCBXcrfDK5-3XEUS_19pPRS5__2s1gb9fijkdGFYS14cseZafYaD-6FE2QPTegYF_Fj5kLyyJMWxHB5SHHIUihdlhZIZnqMk0WIUHsmCQCu3j_WyjsgxSmz_BSsozbo8i0b68graYD5y4jMh_kyzIn7-yMjPBPk9boxadha1rroxx0ETi-cE_c4F6P7uq2Z4eI6PWf6Pl5-XsVVXbeSXdu3Izzjsza3EMAQzD0d8MThpC9XtNRPcqMqCwkeZ0nqd4WIXj3XrYNpgPlaP230_8PNLNSpUKfDm2bIGugRys7eQ4WRxmhUpGIn-XjMGIpKMehJnEiNrEd7O96ODAi_x1DlbCTJlitUmybqm3MnBmat-ut91a-AEiFbm687Y6bsmEypTKu5NknkSCwZg0YA7WKtI1f35EKa1Uh6Qtim7VudYV8WKtoW1Ubp42VenwMfKXlbEzVqAQyFWunI53MqxJyXF0BxkY8nqByNT2Z4ZThhlzDgtZr39Ai9JmlMs1yPubmFuTUQ6p95gfeI0J0KbatKJhhNcbvR-ZMhJwrpTJHHuBRh04nhSpFo7miL4lKkRmJmOVQ_lDRU4kx2niLnNIcCo6ZDAgbR3h6toe0ycwaqaYyIFOs8MCn7MnqbucaQniuumu9AILiGaHX1aXO_ytL8KbE2t9t5xOpo5jS_W9WRzIkRcehGl9Q_qtLuxh6B0aGbOpqzX0erKYDja45yUoqr6AORe7TNxQZA5oTOLXRp7TxPgGjudpLcsZQMzA6abxWfP8be9sFbP3iKR67O23wqybQmsyjCMpWpSd7nvs4eiC0zDXBykBXRy7jLEueTrVuboPBGFo3VGlH4gnG8uam64MNNlo4hO_aPPH0oNidNqTutGl_QaxR90L_qSMy-c1-0McqyTGeG9fIIOpY0XF7YcqfgYVFa4H0y2HpAlGXpSl4aXqYs9K-Nmkpe4-laJjup0bYCTPqGScbK7KBddKXdrqrTtI3KsoV_avGdOy9WIPe7Gx9FuEnarCXDiajrl54lHDaJDBKKVIbs8O7AKx0q3NIcuZTq2--bRbq5Wo9iaxweBY8ayfjmPdmS-cNUJ6JE80Mtwfk65ZGHOipnU53MkV2G3iWwwT4T0QNKJu18LUpElaz3oN1u_U_tL6zRRa7dwx-6c7fbBdhdIS-N07uoUzYDhMs_VgeU2Qe2EXGHuq0DYndd6RQ7rKNgmIze4HHUVznYaTIW8FywjhmVCWZvvYdZZ9vfgVG8WRuLAEvXPeKuqR23ArJMsyy5CGC7SA20MKoNKt8Z44oOU70m5Mu6WsSoY71PN1x9SjZtdr64KLXC0Iim_fRb-zrNrudYvmv9XrQxBP2u08t_vP2bJ5ugFIm0jW-GuSU9oNUCg0SQ_H63tCDS5EJCk_gkkyQqHxfUGPYLvXkuWAJsF4UVICbzkUMhmGEqGLHP96gM5YEucA7nXEvwR1XkGUvIO5fZrDjKvWdGHTUPigciyNk0JjMJREDXmigT5xpwRBAg4i2bQjwlw0TX5viv9C0RX_YiyP7QIIqShsbrqyFd0sxkApwiUZF2lPoSQAteWBWVRFJtYE3jnu1ajN-xg9d5u1M8a-ffXjw4IsdvM8RcVhuPQj9H7bxo4inDcxtdzgG3_DPFh6G9aCcqITxp1lt-9bKE6abxKflgV8V-eGOVpXMRPLM1xTwz9llfecvTTYLr-suUTUiD4wxT_-i32t2_9Cx0n-IRsEwAA'
app.use(
  '/',
  createProxyMiddleware({
    target: 'https://orga60cec93.crm5.dynamics.com',
    changeOrigin: true,
    onProxyReq: (proxyRes, req) => {
      proxyRes.setHeader('Cookie', Cookie)
      console.log({
        proxy: proxyRes.path,
        req: req.path,
      })
    },
    onError: (err) => {
      console.error(err)
    },

  }),
)

app.listen(3000)
console.log('listen...')
// proxy and keep the same base path "/api"
// http://127.0.0.1:3000/api/foo/bar -> http://www.example.org/api/foo/bar
// https://orga60cec93.crm5.dynamics.com/api/data/v9.2/accounts?$top=50
