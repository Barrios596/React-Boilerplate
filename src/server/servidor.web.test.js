import ServidorWeb from './servidor.web'

describe('Iniciado', () => {
    let servidor = null

    beforeAll(() => {
        servidor = new ServidorWeb()
    })

    test('server debe instanciarse', async () => {
        let promesa = servidor.start()
        await expect(promesa).resolves.toBeUndefined()
    })

    test('server debe parar', async () => {
        let promesa = servidor.stop()
        await expect(promesa).resolves.toBeUndefined()
    })
})