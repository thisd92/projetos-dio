import React from "react";
import Basic from "./components/Basic";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('TestandoBasic', () => {
    it('O component Basic deve renderizar corretamente', () => {
        const { baseElement } = render(<Basic name="Thiago" />);
        expect(baseElement).toHaveTextContent('Meu nome é Thiago')
    })
})