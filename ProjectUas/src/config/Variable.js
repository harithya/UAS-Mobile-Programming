import React from 'react'
import { View, Text } from 'react-native'

export const BASE_URL = "https://stmik.abdicreative.com/api/"
export const API_KEY = "kw03dFl5vXGE7pf4wjLa9m92Xlq7k5qRgUUEoLqT1ht5ErfyCkW3hXnl0asKqR4J"
export const PATH = "https://stmik.abdicreative.com/storage/"

export const Config = {
    headers: {
        'Accept': 'application/json',
        'X-Authorization': API_KEY,
        'Content-Type': 'multipart/form-data'
    }
}
