import http from 'http'
import assert from 'assert'

import '../bin/www'

describe('Example Node Server', () => {
    it('should retur 200', done => {
        http.get('http://127.0.0.1:2000', res => {
            assert.equal(200, res.statusCode)
            done()
        })
    })
})