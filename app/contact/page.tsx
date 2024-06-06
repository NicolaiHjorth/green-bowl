export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h3 className="mb-3 text-2xl font-semibold">Contact us</h3>
          <p>
            E-mail: nj@nexusone.dk
            <br />
            Phone: +45 20 77 91 17
            <br />
            Opening hours: Mon-Fri 9-17
            <br />
            <br />
            In case you want to sign up to our newsletter, please use the
            following form:
          </p>
          <br />
  
          <form>
            <label htmlFor="fname">First name:</label>
            <br />
            <input type="text" id="fname" name="fname" />
            <br />
            <br />
            <label htmlFor="lname">Last name:</label>
            <br />
            <input type="text" id="lname" name="lname" />
            <br />
            <br />
            <label htmlFor="email">E-mail:</label>
            <br />
            <input type="text" id="email" name="email" />
            <br />
            <br />
            <label htmlFor="phone">Phone:</label>
            <br />
            <input type="number" id="phone" name="phone" />
            <br />
            <br />
            <button className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-400 transition duration-300">
              Submit
            </button>
          </form>
          <br />
          <br />
          <h3 className="mb-3 text-2xl font-semibold">Find us here</h3>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1124.560961692147!2d12.590131539283517!3d55.68686799326496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525321e0679531%3A0x3bb87caa9e13dffd!2sEsplanaden%208C%2C%201263%20K%C3%B8benhavn!5e0!3m2!1sda!2sdk!4v1717661130972!5m2!1sda!2sdk"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </main>
    );
  }
  