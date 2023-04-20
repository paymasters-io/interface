import nodemailer, { SentMessageInfo } from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const genHtml = (email: string, name?: string) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<!-- saved from url=(1306)https://mail-attachment.googleusercontent.com/attachment/u/2/?ui=2&ik=20eaf8867b&attid=0.1&permmsgid=msg-f:1763720027118343276&th=1879fe0523a1946c&view=att&disp=inline&saddbat=ANGjdJ_o8IoD-DZuLhH-Irnee6sDwzYQkPh1T6JzKbfsyF-4BZrp-N6bTAAedC6flUPS89K5TpCVPgDoBR0iknYzewjC77YHL05IKB6nFu53X6AufkXc6_IrNM25H59f9mFOHJJzoBVr88wYHaPpiwineucz-d7tHlQZjWnn9-eQ6enZyxu2tNn-oUQaRhR5ayb09HY6lTPDzt5uEOski1rLGDT-f2ipBQM2FqC-G_Ou01zmKyrzGEkBh_KSpLpNqBvMyLn9jOxX3ERdgNHWf_rJhNrcySHcJelP1TkzLDy4gWMAIdSX_5H7guSGXrXcgiGkjZ3NFfo5hJlhMAoDeL_B0faYgSSRAsof-hAkywV4LY2nIteloaT07rOimJy8TUCBNYqBrhmB7hHMyVn7S5tQ3vSsxcnCSapcCek6iEoT-DbhHhxlY6vZwSZQEFc7JV5vOMtfDf4pl8E2LLfS0Smx0BIRK8ZJoaIEVsENW1kdZ62gxJTuM6cEKoeR0GCT0ygK74VuoVATpyvMVY2chbQxDfvSs7kEh2UJB02hchjfe9di_1DsLJp2tfrWEHHTYHT6rhs2uJAzJNpunnfSdxgg6BexAa9TBNvrNprRQA8U5TXkqSxEt1oFYrKaTclpbEdKoOdtmZX8QDSQjPc3tAD70zuyh8gPYQ7zgSV3tozbS5JKlgX7q0Vke12kZA3C5bNDADKU0PDaJWmrrm1_JMK347Jv8wokMEhT4asicXwiVabb6zk9R_nJWIRkL4yOQubho5pEuDzBTTozEW78DTqMo5OkSvUtrJc_I208OMpXNGHTeF5lVwn6rWNWYnp1l_ANJqa05TJTZ5fdwEhJ0McrkhABnHXnB5PBj64pd1d-yByMUD_F1YsnPzjIvKkzgHSd8J0JX7cOJ4birnC_h8IzCOope2xKe9L6B3LJobF763C8gqfntJ3TVnE2E2_2npaF_kSo3Fh7meZm0jQsmQTB46nc6Ut4MSeperZPqDC2I0lLzDgn1TQd1xKxrE4XoZt8w9P92xaRJMGF8WTWt-P70sGPaq_RGwrgk22tVkqJxbf7zzaWNIixe10pUQz5S2sZqRENK2QcwCSqSstgLjmmiQKNuQr7hySsh0qADw -->
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 0;
      }
      #m_MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }
      p {
        line-height: inherit;
      }
      .m_desktop_hide,
      .m_desktop_hide table {
        display: none;
        max-height: 0;
        overflow: hidden;
      }
      .m_image_block img + div {
        display: none;
      }
      @media (max-width: 720px) {
        .m_row-content {
          width: 100% !important;
        }
        .m_mobile_hide {
          display: none;
        }
        .m_stack .m_column {
          width: 100%;
          display: block;
        }
        .m_mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0;
        }
        .m_desktop_hide,
        .m_desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body data-new-gr-c-s-check-loaded="14.1105.0" data-gr-ext-installed="">
    <u></u>
    <div style="background-color: #fff; margin: 0; padding: 0">
      <table
        class="m_nl-container"
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="background-color: #fff"
      >
        <tbody>
          <tr>
            <td>
              <table
                class="m_row m_row-1"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="background-color: #7d0cc1; background-size: auto"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="m_row-content m_stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          color: #000;
                          background-color: #7d0cc1;
                          background-size: auto;
                          width: 700px;
                        "
                        width="700"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="m_column m_column-1"
                              width="100%"
                              style="
                                font-weight: 400;
                                text-align: left;
                                padding-top: 40px;
                                vertical-align: top;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="m_text_block m_block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="word-break: break-word"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="m_pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 30px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          style="
                                            font-size: 12px;
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            color: #fff;
                                            line-height: 1.2;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                            <span style="font-size: 30px"
                                              ><strong
                                                >Congrats! You've been added to
                                                the waitlist</strong
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                class="m_text_block m_block-2"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="word-break: break-word"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="m_pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 20px;
                                        padding-right: 20px;
                                        padding-top: 10px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          style="
                                            font-size: 12px;
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            color: #d8ebf8;
                                            line-height: 1.5;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                            <span style="font-size: 16px"
                                              >Hey ${
                                                name ? name : email
                                              }, thanks for signing
                                              up to the wait list.</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="m_row m_row-2"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="m_row-content m_stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="color: #000; width: 700px"
                        width="700"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="m_column m_column-1"
                              width="100%"
                              style="
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 25px;
                                padding-top: 25px;
                                vertical-align: top;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="m_text_block m_block-1"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="word-break: break-word"
                              >
                                <tbody>
                                  <tr>
                                    <td class="m_pad">
                                      <div style="font-family: sans-serif">
                                        <div
                                          style="
                                            font-size: 12px;
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            color: #555;
                                            line-height: 1.2;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                            <a
                                              href="https://paymasters.io"
                                              style="
                                                text-decoration: underline;
                                                color: #555555;
                                              "
                                              rel="noopener noreferrer"
                                              target="_blank"
                                              >https://paymasters.io</a
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <div style="background-color: transparent">
        <div
          style="
            margin: 0 auto;
            min-width: 320px;
            max-width: 500px;
            word-wrap: break-word;
            word-break: break-word;
            background-color: transparent;
          "
          class="m_block-grid"
        >
          <div
            style="
              border-collapse: collapse;
              display: table;
              width: 100%;
              background-color: transparent;
            "
          >
            <div
              class="m_col m_num12"
              style="
                min-width: 320px;
                max-width: 500px;
                display: table-cell;
                vertical-align: top;
              "
            >
              <div
                style="background-color: transparent; width: 100% !important"
              >
                <div
                  style="
                    border-top: 0px solid transparent;
                    border-left: 0px solid transparent;
                    border-bottom: 0px solid transparent;
                    border-right: 0px solid transparent;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    padding-right: 0px;
                    padding-left: 0px;
                  "
                >
                  <div
                    align="center"
                    class="m_img-container m_center m_autowidth"
                    style="padding-right: 0px; padding-left: 0px"
                  >

                      <img
                        class="m_center m_autowidth"
                        align="center"
                        border="0"
                        src="https://www.paymasters.io/_next/static/media/paymaster-logo.fa7bd2ed.svg"
                        alt="Image"
                        style="
                          outline: none;
                          text-decoration: none;
                          clear: both;
                          display: block !important;
                          border: 0;
                          height: auto;
                          float: none;
                          width: 100%;
                          max-width: 168px;
                        "
                        width="168"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;

export const sendMail = async ({
  email,
  name,
  subject,
  text,
}: {
  email: string;
  name: string;
  subject: string;
  text: string;
}): Promise<{
  success: boolean;
  err?: Error;
  info?: SentMessageInfo;
}> =>
  new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: "Miracle@paymasters.io",
        to: email,
        subject,
        text,
        html: genHtml(email, name),
      },
      (err, info) => {
        if (err) {
          console.log(err);

          reject({ success: false, err });
        } else {
          console.log(info);

          resolve({ success: true, info });
        }
      }
    );
  });
