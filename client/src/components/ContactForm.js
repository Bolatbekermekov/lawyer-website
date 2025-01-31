import { useState } from 'react'

const ContactForm = () => {
	const [status, setStatus] = useState('Отправить сообщение')
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [query, setQuery] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		setStatus('Отправляется...')

		// Формируем сообщение для WhatsApp
		const message = `Здравствуйте! Меня зовут ${name}.
    ✉️ Email: ${email} 
    📞 Телефон: ${phone} 
    📝 Сообщение: ${query}`

		// Формируем ссылку для отправки в WhatsApp
		const whatsappURL = `https://wa.me/77053935207?text=${encodeURIComponent(
			message
		)}`

		// Открываем WhatsApp
		window.open(whatsappURL, '_blank')

		// Очистка полей формы после отправки
		setName('')
		setEmail('')
		setPhone('')
		setQuery('')
		setStatus('Отправить сообщение')
	}

	return (
		<div className='form-wrap p-5 mb-5'>
			<div className='form-overlay'></div>
			<div className='contact-form text-center'>
				<p className='lead text-light'>Запросить консультацию</p>
			</div>
			<div className='row justify-content-center'>
				<div className='col-lg-12'>
					<form onSubmit={handleSubmit}>
						<label htmlFor='name' className='form-label text-light'>
							Имя и Фамилия:
						</label>
						<input
							type='text'
							id='name'
							value={name}
							onChange={e => setName(e.target.value)}
							className='form-control'
							required
						/>
						<label htmlFor='email' className='form-label text-light pt-2'>
							Email:
						</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='form-control'
							required
						/>
						<label htmlFor='phone' className='form-label text-light pt-2'>
							Телефон:
						</label>
						<input
							type='tel'
							id='phone'
							value={phone}
							onChange={e => setPhone(e.target.value)}
							className='form-control'
							required
						/>
						<div>
							<label htmlFor='query' className='form-label text-light pt-2'>
								Ваше сообщение:
							</label>
							<textarea
								className='form-control'
								value={query}
								onChange={e => setQuery(e.target.value)}
								id='query'
								required
							></textarea>
						</div>
						<div className='my-4 text-center pt-2'>
							<button
								type='submit'
								className='btn btn-outline-dark'
								aria-label='Отправить сообщение'
							>
								{status}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ContactForm
